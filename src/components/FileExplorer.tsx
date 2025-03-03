
import React from 'react';
import { Search, Grid, List, ChevronRight } from 'lucide-react';
import { FileItem, FileData, getFileIcon, getIconColor } from '@/utils/fileSystem';

interface FileExplorerProps {
  selectedPath: string;
  breadcrumbs: Array<{ name: string; path: string }>;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  currentItems: FileItem[];
  navigateTo: (path: string) => void;
  openFile: (file: FileItem) => void;
}

const FileExplorer: React.FC<FileExplorerProps> = ({
  selectedPath,
  breadcrumbs,
  searchTerm,
  setSearchTerm,
  viewMode,
  setViewMode,
  currentItems,
  navigateTo,
  openFile
}) => {
  const Icon = (item: FileItem) => {
    const IconComponent = getFileIcon(item);
    const colorClass = getIconColor(item);
    return <IconComponent className={`${colorClass}`} />;
  };
  
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <div className="bg-white border-b border-gray-100 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              <button 
                onClick={() => navigateTo(crumb.path)}
                className="hover:text-blue-600 text-sm font-medium transition-colors breadcrumb-item px-2"
              >
                {crumb.name}
              </button>
              {index < breadcrumbs.length - 1 && <ChevronRight className="w-4 h-4 text-gray-400" />}
            </React.Fragment>
          ))}
        </div>
        
        <div className="flex items-center">
          <div className="relative mr-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search files..."
              className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 w-64 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex p-1 bg-gray-100 rounded-lg">
            <button 
              className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button 
              className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-6 overflow-y-auto">
        {currentItems.length === 0 ? (
          <div className="animate-fade-in flex flex-col items-center justify-center h-full text-center px-4">
            <div className="bg-gray-100 p-6 rounded-full mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              {searchTerm ? 'No items match your search' : 'This folder is empty'}
            </h3>
            <p className="text-gray-500 max-w-md">
              {searchTerm 
                ? `We couldn't find anything matching "${searchTerm}". Try a different search term.` 
                : 'There are no files or folders in the current directory.'}
            </p>
          </div>
        ) : (
          <div className={`animate-fade-in ${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4' 
              : 'flex flex-col space-y-2'
          }`}>
            {currentItems.map((item) => (
              viewMode === 'grid' ? (
                // Grid View
                <div 
                  key={item.path}
                  className="bg-white p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer file-explorer-item group"
                  onClick={() => item.type === 'folder' ? navigateTo(item.path) : openFile(item)}
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                      {Icon(item)}
                    </div>
                    <div className="ml-3 truncate">
                      <p className="font-medium text-gray-800 truncate">{item.name}</p>
                      {item.type === 'file' && (
                        <p className="text-xs text-gray-500">{item.size}</p>
                      )}
                    </div>
                  </div>
                  {item.type === 'file' && (
                    <div className="text-xs text-gray-400 mt-1">
                      {item.dateCreated}
                    </div>
                  )}
                </div>
              ) : (
                // List View
                <div 
                  key={item.path}
                  className="bg-white p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer file-explorer-item flex items-center justify-between"
                  onClick={() => item.type === 'folder' ? navigateTo(item.path) : openFile(item)}
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-gray-50 rounded-lg mr-3">
                      {Icon(item)}
                    </div>
                    <span className="font-medium text-gray-800">{item.name}</span>
                  </div>
                  {item.type === 'file' && (
                    <div className="text-sm text-gray-500 flex items-center space-x-6">
                      <span>{item.dateCreated}</span>
                      <span className="w-20 text-right">{item.size}</span>
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileExplorer;
