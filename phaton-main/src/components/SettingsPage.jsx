import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, Bell, User, Upload, X, Home,
  ShoppingCart,
  Package,
  BarChart2,
  MessageSquare,
  Settings,
  List, } from "lucide-react";



const Card = ({ children, className }) => (
  <div className={`bg-white shadow rounded-lg p-4 ${className || ""}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-2 ${className || ""}`}>{children}</div>
);

const Tabs = ({ children, className }) => (
  <div className={`w-full ${className || ""}`}>{children}</div>
);

const TabsList = ({ children, className }) => (
  <div className={`flex gap-2 border-b ${className || ""}`}>{children}</div>
);

const TabsTrigger = ({ children, className, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
      active
        ? "bg-white text-blue-600 border-b-2 border-blue-600"
        : "text-gray-500 hover:text-gray-700"
    } ${className || ""}`}
  >
    {children}
  </button>
);

const TabsContent = ({ children, active, className }) =>
  active ? <div className={`p-4 ${className || ""}`}>{children}</div> : null;

const Input = ({ className, ...props }) => (
  <input
    {...props}
    className={`w-full px-3 py-2 border rounded-lg ${className || ""}`}
  />
);

const Label = ({ children }) => (
  <label className="block text-sm font-medium mb-1">{children}</label>
);

const Switch = () => (
  <input type="checkbox" className="toggle-checkbox" />
);

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="flex h-screen bg-gray-100">
      {sidebarOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-40 z-20 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              ></div>
            )}
      
            <aside
              className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#1F3446] text-white transform 
              ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} 
              transition-transform duration-300 ease-in-out lg:translate-x-0`}
            >
              <div className="flex items-center justify-between h-16 border-b border-gray-700 px-4">
                <span className="select-none text-2xl font-bold">Phaton</span>
                <button
                  className="lg:hidden text-gray-300"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X size={22} />
                </button>
              </div>
      
              <nav className="p-4 space-y-4 text-sm font-medium">
                <Link to="/admin/dashboard" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                  <Home size={20} /> Dashboard
                </Link>
                <Link to="/admin/order"
                  className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer"
                >
                  <ShoppingCart size={20} /> Orders
                </Link>
                <Link to="/admin/product"
                  className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer"
                >
                  <Package size={20} /> Products
                </Link>
                <a className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                  <List size={20} /> Categories
                </a>
                <Link to="/admin/analytics" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                  <BarChart2 size={20} /> Analytics
                </Link>
                <a className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                  <MessageSquare size={20} /> Messages
                </a>
                <Link to="/admin/settings" className="flex items-center gap-3 bg-white text-[#1F3446] font-semibold p-2 rounded-md cursor-pointer">
                  <Settings size={20} /> Settings
                </Link>
              </nav>
            </aside>

            <div className="flex-1 flex flex-col lg:ml-64 min-h-screen overflow-y-auto">
              <header className="flex items-center justify-between bg-white h-16 px-4 shadow-md sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                  >
                    <Menu size={24} />
                  </button>
                  <h1 className="text-lg md:text-xl font-semibold">
                    Settings
                  </h1>
                </div>
      
                <div className="flex items-center gap-4">
                  <div className="relative hidden sm:block">
                    <input
                      type="text"
                      placeholder="Search for digital products"
                      className="border rounded-full pl-10 pr-4 py-2 w-64 text-sm"
                    />
                    <Search
                      className="absolute top-2 left-3 text-gray-400"
                      size={18}
                    />
                  </div>
      
                  <div className="flex items-center gap-2">
                    <Bell size={22} className="text-gray-600 cursor-pointer" />
                    <div className="leading-tight">
                      <span className="block font-semibold text-sm sm:text-base">
                        Divine I.
                      </span>
                      <span className="text-xs font-light text-gray-400 hidden sm:block">
                        divinei**@phaton.com
                      </span>
                    </div>
                  </div>
                </div>
              </header>

        <main className="p-4 md:p-6 lg:p-8 overflow-y-auto">
        <h2 className="text-gray-700 mb-4">
            Manage your Platform configuration and Preferences
          </h2>
          <Tabs>
            <TabsList className="w-full flex flex-wrap gap-2 mb-6">
              <TabsTrigger
                active={activeTab === "general"}
                onClick={() => setActiveTab("general")}
              >
                🖥️ General Configuration
              </TabsTrigger>
              <TabsTrigger
                active={activeTab === "payment"}
                onClick={() => setActiveTab("payment")}
              >
                💳 Payment
              </TabsTrigger>
              <TabsTrigger
                active={activeTab === "security"}
                onClick={() => setActiveTab("security")}
              >
                🔒 Security Configuration
              </TabsTrigger>
            </TabsList>

            <TabsContent active={activeTab === "general"}>
              <Card>
                <CardContent className="space-y-4 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Site name</Label>
                      <Input placeholder="Phaton" />
                    </div>
                    <div>
                      <Label>Site URL</Label>
                      <Input placeholder="https://phaton.com" />
                    </div>
                    <div>
                      <Label>Site Description</Label>
                      <Input placeholder="Premium digital products marketplace" />
                    </div>
                    <div>
                      <Label>Support Email</Label>
                      <Input placeholder="support@phaton.com" />
                    </div>
                  </div>
                  <div>
                    <Label>Branding Logo</Label>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 border rounded flex items-center justify-center cursor-pointer">
                        <Upload className="text-gray-500" />
                      </div>
                      <span className="text-sm text-gray-500">Upload logo</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent active={activeTab === "payment"}>
              <Card>
                <CardContent className="space-y-4 p-6">
                  <div>
                    <Label>Default Currency</Label>
                    <Input placeholder="USD" />
                  </div>
                  <div>
                    <Label>Tax Rate %</Label>
                    <Input placeholder="10%" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold">Payment Gateway</h3>
                    <div className="flex items-center justify-between border p-3 rounded">
                      <div>
                        <p className="font-medium">Stripe</p>
                        <p className="text-sm text-gray-500">
                          Credit cards, digital wallets
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between border p-3 rounded">
                      <div>
                        <p className="font-medium">PayPal</p>
                        <p className="text-sm text-gray-500">PayPal payments</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent active={activeTab === "security"}>
              <Card>
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center justify-between border p-3 rounded">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-500">
                        Require 2FA for admin accounts
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between border p-3 rounded">
                    <div>
                      <p className="font-medium">Email Verification</p>
                      <p className="text-sm text-gray-500">
                        Require email verification for new accounts
                      </p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
