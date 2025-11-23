import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
    username: string;
    name: string;
}

interface AuthContextType {
    user: User | null;
    login: (username: string) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check for persisted user on mount
        const storedUser = localStorage.getItem("uberhub_user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse stored user", e);
                localStorage.removeItem("uberhub_user");
            }
        }
        setIsLoading(false);
    }, []);

    const login = async (username: string) => {
        // Mock login - accept any username, but "admin" gets special treatment if we wanted
        // For now, just logging in anyone who enters a name
        const newUser = { username, name: username }; // Simple mock user
        setUser(newUser);
        localStorage.setItem("uberhub_user", JSON.stringify(newUser));
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("uberhub_user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
