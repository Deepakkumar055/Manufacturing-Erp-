import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Dummy data for the dashboard
  const stats = [
    { id: 1, title: 'Enquiries', count: 12, icon: 'mail', color: 'bg-blue-500', path: '/enquiries' },
    { id: 2, title: 'Quotations', count: 8, icon: 'description', color: 'bg-green-500', path: '/quotation' },
    { id: 3, title: 'Sales Orders', count: 15, icon: 'shopping_cart', color: 'bg-yellow-500', path: '/sales-orders' },
    { id: 4, title: 'Job Orders', count: 5, icon: 'engineering', color: 'bg-red-500', path: '/job-order' },
  ];

  const enquiryStats = [
    { status: 'Open', count: 5, color: 'bg-blue-500' },
    { status: 'Quoted', count: 3, color: 'bg-green-500' },
    { status: 'Converted', count: 2, color: 'bg-yellow-500' },
    { status: 'Closed', count: 2, color: 'bg-red-500' },
  ];

  const recentQuotations = [
    { id: 'ABC C023', customer: 'ABC Corp', date: '04/23/2024', status: 'Approved' },
    { id: 'XYZ Ltd', customer: 'XYZ Ltd', date: '04/22/2024', status: 'Approved' },
    { id: 'DEF Industries', customer: 'DEF Indurid', date: '04/21/2024', status: 'Pending' },
    { id: 'LMN Co', customer: 'LMN Co', date: '04/20/2024', status: 'Pending' },
  ];

  const salesOrders = {
    confirmed: 45,
    pending: 35,
    cancelled: 20,
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-500 text-white';
      case 'Pending':
        return status === 'Pending' && new Date().getDate() % 2 === 0 
          ? 'bg-green-500 text-white' 
          : 'bg-yellow-500 text-white';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Link to={stat.path} key={stat.id} className="block">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-white mr-4`}>
                  <span className="material-icons">{stat.icon}</span>
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                  <p className="text-3xl font-bold">{stat.count}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enquiries by Status */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-medium mb-6">Enquiries by Status</h3>
            <div className="flex justify-center mb-4">
              <div className="relative w-56 h-56">
                {/* Chart Circle */}
                <div className="w-56 h-56 rounded-full border-8 border-transparent bg-gray-100 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white"></div>
                </div>
                
                {/* Chart Segments */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3B82F6" strokeWidth="20" strokeDasharray="125.6 251.2" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10B981" strokeWidth="20" strokeDasharray="62.8 251.2" strokeDashoffset="-125.6" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#FBBF24" strokeWidth="20" strokeDasharray="41.9 251.2" strokeDashoffset="-188.4" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#EF4444" strokeWidth="20" strokeDasharray="41.9 251.2" strokeDashoffset="-230.3" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              {enquiryStats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <span className={`w-4 h-4 ${stat.color} rounded-full mr-2`}></span>
                  <span className="mr-2">{stat.status}</span>
                  <span className="font-medium">{stat.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Quotations */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">Recent Quotations</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Quotation ID</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Customer</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentQuotations.map((quote, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 text-sm text-blue-600">{quote.id}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{quote.customer}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{quote.date}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusClass(quote.status)}`}>
                          {quote.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Orders by Status */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-medium mb-6">Sales Orders by Status</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-24 text-sm">Confirmed</div>
              <div className="flex-1 h-6 bg-gray-200 rounded-md overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: `${salesOrders.confirmed}%` }}></div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-24 text-sm">Pending</div>
              <div className="flex-1 h-6 bg-gray-200 rounded-md overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: `${salesOrders.pending}%` }}></div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-24 text-sm">Cancelled</div>
              <div className="flex-1 h-6 bg-gray-200 rounded-md overflow-hidden">
                <div className="h-full bg-red-500" style={{ width: `${salesOrders.cancelled}%` }}></div>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 justify-items-center">
            <div className="text-center">Confirmed</div>
            <div className="text-center">Pending</div>
            <div className="text-center">Cancelled</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 