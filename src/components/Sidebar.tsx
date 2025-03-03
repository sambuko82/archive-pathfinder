
import React from 'react';
import { Home, Folder, BarChart2, FileText, Calendar, DollarSign, Truck } from 'lucide-react';
import StatisticsPanel from './StatisticsPanel';
import { Statistics } from '@/utils/fileSystem';

interface SidebarProps {
  selectedPath: string;
  navigateTo: (path: string) => void;
  statistics: Statistics;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedPath, navigateTo, statistics }) => {
  const isActive = (path: string) => selectedPath === path;

  return (
    <div className="w-72 bg-white border-r border-gray-100 h-full flex flex-col">
      <div className="p-6">
        <h2 className="font-medium text-lg mb-6 text-gray-800">Archive Explorer</h2>
        
        <nav className="space-y-1">
          <button 
            onClick={() => navigateTo('/')}
            className={`nav-link flex items-center w-full p-3 rounded-lg text-sm ${
              isActive('/') 
                ? 'bg-blue-50 text-blue-700 font-medium' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Home className={`w-4 h-4 mr-3 ${isActive('/') ? 'text-blue-600' : 'text-gray-500'}`} />
            <span>Home</span>
          </button>
          
          <div className="py-2">
            <div className="text-xs uppercase font-medium text-gray-400 mb-2 px-3">Channels</div>
            <button 
              onClick={() => navigateTo('/order_channels')}
              className={`nav-link flex items-center w-full p-3 rounded-lg text-sm ${
                isActive('/order_channels') 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Folder className={`w-4 h-4 mr-3 ${isActive('/order_channels') ? 'text-blue-600' : 'text-gray-500'}`} />
              <span>Order Channels</span>
            </button>
            
            <div className="pl-6 mt-1 space-y-1">
              <button 
                onClick={() => navigateTo('/order_channels/JVTO')}
                className={`nav-link flex items-center w-full p-3 rounded-lg text-sm ${
                  isActive('/order_channels/JVTO') 
                    ? 'bg-blue-50 text-blue-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Folder className={`w-3.5 h-3.5 mr-3 ${isActive('/order_channels/JVTO') ? 'text-blue-600' : 'text-gray-500'}`} />
                <span>JVTO</span>
              </button>
              
              <button 
                onClick={() => navigateTo('/order_channels/Klook')}
                className={`nav-link flex items-center w-full p-3 rounded-lg text-sm ${
                  isActive('/order_channels/Klook') 
                    ? 'bg-blue-50 text-blue-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Folder className={`w-3.5 h-3.5 mr-3 ${isActive('/order_channels/Klook') ? 'text-blue-600' : 'text-gray-500'}`} />
                <span>Klook</span>
              </button>
              
              <button 
                onClick={() => navigateTo('/order_channels/TWT')}
                className={`nav-link flex items-center w-full p-3 rounded-lg text-sm ${
                  isActive('/order_channels/TWT') 
                    ? 'bg-blue-50 text-blue-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Folder className={`w-3.5 h-3.5 mr-3 ${isActive('/order_channels/TWT') ? 'text-blue-600' : 'text-gray-500'}`} />
                <span>TWT</span>
              </button>
            </div>
          </div>
          
          <div className="py-2">
            <div className="text-xs uppercase font-medium text-gray-400 mb-2 px-3">Resources</div>
            <button 
              onClick={() => navigateTo('/reports')}
              className={`nav-link flex items-center w-full p-3 rounded-lg text-sm ${
                isActive('/reports') 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <BarChart2 className={`w-4 h-4 mr-3 ${isActive('/reports') ? 'text-blue-600' : 'text-gray-500'}`} />
              <span>Reports & Analytics</span>
            </button>
            
            <button 
              onClick={() => navigateTo('/shared_resources')}
              className={`nav-link flex items-center w-full p-3 rounded-lg text-sm ${
                isActive('/shared_resources') 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Folder className={`w-4 h-4 mr-3 ${isActive('/shared_resources') ? 'text-blue-600' : 'text-gray-500'}`} />
              <span>Shared Resources</span>
            </button>
          </div>
          
          <div className="py-2">
            <div className="text-xs uppercase font-medium text-gray-400 mb-2 px-3">Quick Access</div>
            <button 
              onClick={() => navigateTo('/order_channels/JVTO/bookings')}
              className="nav-link flex items-center w-full p-3 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
            >
              <FileText className="w-4 h-4 mr-3 text-blue-500" />
              <span>JVTO Bookings</span>
            </button>
            
            <button 
              onClick={() => navigateTo('/order_channels/JVTO/schedules')}
              className="nav-link flex items-center w-full p-3 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
            >
              <Calendar className="w-4 h-4 mr-3 text-green-500" />
              <span>JVTO Schedules</span>
            </button>
            
            <button 
              onClick={() => navigateTo('/order_channels/JVTO/invoices')}
              className="nav-link flex items-center w-full p-3 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
            >
              <DollarSign className="w-4 h-4 mr-3 text-red-500" />
              <span>JVTO Invoices</span>
            </button>
            
            <button 
              onClick={() => navigateTo('/order_channels/JVTO/crew_vehicle_assignments')}
              className="nav-link flex items-center w-full p-3 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
            >
              <Truck className="w-4 h-4 mr-3 text-purple-500" />
              <span>Crew & Vehicles</span>
            </button>
          </div>
        </nav>
      </div>
      
      <div className="mt-auto px-6 pb-6">
        <StatisticsPanel statistics={statistics} />
      </div>
    </div>
  );
};

export default Sidebar;
