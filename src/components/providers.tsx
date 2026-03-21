
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, MOCK_USERS, Listing } from '@/lib/mock-data';
import { INITIAL_CONTENT } from '@/lib/initial-content';

// --- Theme Context ---
export type PrimaryTheme = 'sovereign' | 'midnight' | 'cobalt' | 'royal' | 'crimson' | 'cold-white';

interface ThemeContextType {
  theme: PrimaryTheme;
  setTheme: (theme: PrimaryTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // MASTER DIRECTIVE: Default to clinical cold-white light mode (Forced Default)
  const [theme, setThemeState] = useState<PrimaryTheme>('cold-white');

  const setTheme = (newTheme: PrimaryTheme) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Institutional Logic: Manage dark class based on theme profile
    if (newTheme !== 'cold-white') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('vault_theme', newTheme);
  };

  useEffect(() => {
    const stored = localStorage.getItem('vault_theme') as PrimaryTheme;
    if (stored) {
      setTheme(stored);
    } else {
      setTheme('cold-white'); 
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

// --- Content CMS Context ---
interface ContentContextType {
  content: typeof INITIAL_CONTENT;
  updatePage: (slug: string, section: string, data: any) => void;
  updateSettings: (data: Partial<typeof INITIAL_CONTENT.settings>) => void;
  resetToDefault: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState(INITIAL_CONTENT);

  useEffect(() => {
    const stored = localStorage.getItem('vault_content');
    if (stored) {
      try {
        setContent(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to load content registry", e);
      }
    }
  }, []);

  const saveContent = (newContent: typeof INITIAL_CONTENT) => {
    setContent(newContent);
    localStorage.setItem('vault_content', JSON.stringify(newContent));
  };

  const updatePage = (slug: string, section: string, data: any) => {
    const newContent = { ...content };
    if (newContent.pages[slug as keyof typeof content.pages]) {
      const page = newContent.pages[slug as keyof typeof content.pages];
      (page.sections as any)[section] = {
        ...(page.sections as any)[section],
        ...data
      };
      saveContent(newContent);
    }
  };

  const updateSettings = (data: Partial<typeof INITIAL_CONTENT.settings>) => {
    const newContent = {
      ...content,
      settings: { ...content.settings, ...data }
    };
    saveContent(newContent);
  };

  const resetToDefault = () => {
    saveContent(INITIAL_CONTENT);
  };

  return (
    <ContentContext.Provider value={{ content, updatePage, updateSettings, resetToDefault }}>
      {children}
    </ContentContext.Provider>
  );
}

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error("useContent must be used within ContentProvider");
  return context;
};

// --- Auth Context ---
interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string) => {
    const foundUser = MOCK_USERS.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('vault_user', JSON.stringify(foundUser));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('vault_user');
  };

  useEffect(() => {
    const stored = localStorage.getItem('vault_user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {
        localStorage.removeItem('vault_user');
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

// --- Currency Context ---
export type CurrencyCode = 'GHS' | 'USD' | 'EUR' | 'GBP';

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  formatPrice: (priceGHS: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const RATES: Record<CurrencyCode, { rate: number; symbol: string }> = {
  GHS: { rate: 1, symbol: 'GH₵' },
  USD: { rate: 0.082, symbol: '$' },
  EUR: { rate: 0.076, symbol: '€' },
  GBP: { rate: 0.064, symbol: '£' },
};

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<CurrencyCode>('GHS');

  const formatPrice = (priceGHS: number) => {
    const { rate, symbol } = RATES[currency];
    const converted = priceGHS * rate;
    return `${symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: currency === 'GHS' ? 0 : 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be used within CurrencyProvider");
  return context;
};

// --- Cart Context ---
interface CartItem extends Listing {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Listing) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: Listing) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

export function AuthProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ContentProvider>
        <AuthProvider>
          <CurrencyProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </CurrencyProvider>
        </AuthProvider>
      </ContentProvider>
    </ThemeProvider>
  );
}
