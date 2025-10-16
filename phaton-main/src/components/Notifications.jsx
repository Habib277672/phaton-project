import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Zap, Lock, Brush } from 'lucide-react';

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      icon: <Download className="w-6 h-6" />,
      title: 'Your eBook "The Millionaire Mindset " is ready to download',
      subtitle: 'Tap to access your library',
      time: '5 min ago',
      category: 'purchases',
      unread: true,
      link: '/library'
    },
    {
      id: 2,
      icon: <Zap className="w-6 h-6" />,
      title: 'Flash sale! Get 50% off on all video templates',
      subtitle: 'Limited time offer!',
      time: 'Yesterday',
      category: 'promotions',
      unread: true,
      link: '/templates'
    },
    {
      id: 3,
      icon: <Lock className="w-6 h-6" />,
      title: 'New sign-in from Chrome on Windows',
      subtitle: 'If this was you, you can ignore this message',
      time: 'Aug 20',
      category: 'security',
      unread: true,
      link: '/security'
    },
    {
      id: 4,
      icon: <Brush className="w-6 h-6" />,
      title: 'New course from Creative Minds',
      subtitle: 'Design 101 is now available',
      time: 'Aug 15',
      category: 'creator',
      unread: true,
      link: '/courses'
    }
  ];

  const [activeTab, setActiveTab] = React.useState('all');

  const filteredNotifications = activeTab === 'all' 
    ? notifications 
    : notifications.filter(n => n.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Notifications</h1>
          <div className="flex gap-4">
            <button className="text-gray-600 cursor-pointer hover:text-gray-900 transition">
              Mark all as read
            </button>
            <Link to="/settings/notifications" className="text-gray-600 hover:text-gray-900 transition">
              Notifications Settings
            </Link>
          </div>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 cursor-pointer rounded-full transition ${
              activeTab === 'all'
                ? 'bg-gray-200 text-gray-900'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('purchases')}
            className={`px-6 py-2 cursor-pointer rounded-full transition ${
              activeTab === 'purchases'
                ? 'bg-gray-200 text-gray-900'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Purchases & Downloads
          </button>
          <button
            onClick={() => setActiveTab('promotions')}
            className={`px-6 py-2 cursor-pointer rounded-full transition ${
              activeTab === 'promotions'
                ? 'bg-gray-200 text-gray-900'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Promotions & Offers
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-6 py-2 cursor-pointer rounded-full transition ${
              activeTab === 'security'
                ? 'bg-gray-200 text-gray-900'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Account & Security
          </button>
          <button
            onClick={() => setActiveTab('creator')}
            className={`px-6 py-2 cursor-pointer rounded-full transition ${
              activeTab === 'creator'
                ? 'bg-gray-200 text-gray-900'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Creator Updates
          </button>
        </div>

        <div className="space-y-4">
          {filteredNotifications.map((notification) => (
            <Link
              key={notification.id}
              to={notification.link}
              className="block bg-white rounded-lg p-6 hover:shadow-md transition border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  {notification.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {notification.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {notification.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  {notification.unread && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                  <span className="text-gray-600 text-sm whitespace-nowrap">
                    {notification.time}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}