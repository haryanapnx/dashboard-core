import Home from '../../layouts/fullLayout'
// import Orders from '../views/logistics/orders';
// import RouteAndPrice from '../views/logistics/routeAndPrice';
// import TripStoreOrder from '../views/trip_store/orders';
// import TripStoreToko from '../views/trip_store/list_toko';
// import Feeders from '../views/logistics/feeders';
// import TravelTrain from '../views/logistics/travel_train';
// import TravelAirplane from '../views/logistics/travel_airplane';
// import TravelCar from '../views/logistics/travel_car';
// import formRegister from '../views/form-register/form-register'
// import Kulina from '../views/partnership/kulina'
// import TriplogisticsOrderDetail from '../views/logistics/triplogistics-order-detail'
// import Manifests from '../views/logistics/manifests'
// import Users from '../views/CRM/users'
// import Flights from '../views/tickets/flight'

// import getSlaBasedCity from '../views/sla_list/get_based_city'

// import UserBalance from '../views/fee/user-balance'
// import UserPoint from '../views/fee/user-point'
// import UserTopup from '../views/fee/topup-balance'
// import WithdrawRequest from '../views/fee/withdraw-request'

// import getBasedCity from '../views/sla_list/get_based_city';

// import RevenueLogistics from '../views/statistics/revenue_logistics';
// import RevenueLogisticsCsv from '../views/statistics/revenue_logistic_csv';
// import UserGrowth from '../views/statistics/user_growth';
// import UserGrowthCsv from '../views/statistics/user_growth_csv';
// import Summary from '../views/statistics/summary';

// import OrdersCorp from '../views/logistics/orders_corp';

// import releaseOrder from '../views/feeder/releaseOrder';
// import releaseOrderCorporate from '../views/feeder/releaseOrderCorporate';
// import trackOrder from '../views/feeder/trackOrder';
// import registerFeeder from '../views/feeder/registerFeeder';
// import listFeeder from '../views/feeder/listFeeder';

// import Agen from '../views/agen/agen';

var dashboards = [
  {
    path: '/home',
    name: 'Home',
    icon: 'mdi mdi-home',
    component: Home
  },
  {
    collapse: true,
    name: 'Statistik',
    state: 'statistics',
    icon: 'mdi mdi-database',
    child: [
      {
        path: '/statistics-logistics',
        name: 'Revenue Logistik',
        component: 'RevenueLogistics'
      },
      {
        path: '/statistics-summary',
        name: 'summary',
        component: 'Summary'
      },
      // {
      //   path: '/statistics-logistics',
      //   name: 'Revenue Logistik',
      //   component: 'RevenueLogisticsCsv'
      // },
      // {
      //   path: '/statistics-tripstore',
      //   name: 'Transaksi Tripstore',
      //   component: 'Feeders'
      // },
      // {
      //   path: '/statistics-travelers',
      //   name: 'Travelers',
      //   component: 'Feeders'
      // },
      // {
      //   path: '/statistics-users',
      //   name: 'Pertumbuhan Users',
      //   component: 'UserGrowthCsv'
      // },
      // {
      //   path: '/statistics-flight',
      //   name: 'Revenue Tiket Pesawat',
      //   component: 'Feeders'
      // },
      // {
      //   path: '/statistics-hotel',
      //   name: 'Renenue Hotel',
      //   component: 'Feeders'
      // },
      // {
      //   path: '/statistics-feeder-performance',
      //   name: 'Feeder Performance',
      //   component: 'Feeders'
      // },
    ]
  },
  {
    collapse: true,
    name: 'Fee',
    state: 'fee',
    icon: 'mdi mdi-cash-multiple',
    child: [
      {
        path: '/user-balance',
        name: 'User Balance',
        component: 'UserBalance'
      },
      {
        path: '/user-point',
        name: 'User Point',
        component: 'UserPoint'
      },
      {
        path: '/user-topup',
        name: 'Top-Up Request',
        component: 'UserTopup'
      },
      // {
      //   path: '/withdraw-request',
      //   name: 'Withdraw Request',
      //   component: 'WithdrawRequest'
      // }
    ]
  },
  {
    collapse: true,
    name: 'Logistik',
    state: 'logistik',
    icon: 'mdi mdi-truck',
    child: [
      {
        path: '/orders',
        name: 'Orders Retail',
        component: 'Orders'
      },
      {
        path: '/orders-corp',
        name: 'Orders Corporate',
        component: 'OrdersCorp'
      },
      // {
      //   path: '/manifests',
      //   name: 'Manifest',
      //   component: 'Manifests'
      // },
      // {
      //   path: '/feeders',
      //   name: 'Feeders',
      //   component: 'Feeders'
      // },
      // {
      //   path: '/traveler-car',
      //   name: 'Traveler Dengan Mobil',
      //   component: 'TravelCar'
      // },
      // {
      //   path: '/traveler-train',
      //   name: 'Traveler Dengan Kereta',
      //   component: 'TravelTrain'
      // },
      // {
      //   path: '/traveler-plane',
      //   name: 'Traveler Dengan Pesawat',
      //   component: 'TravelAirplane'
      // },
      // {
      //   path: '/cargo',
      //   name: 'Kargo',
      //   component: 'Feeders'
      // },
    ]
  },
  {
    collapse: true,
    name: 'Feeder',
    state: 'feeder',
    icon: 'mdi mdi-motorbike',
    child: [
      {
        path: '/release-order',
        name: 'Release Order',
        component: 'releaseOrder'
      },
      {
        path: '/release-order-corp',
        name: 'Release Order Corporate',
        component: 'releaseOrderCorporate'
      },
      {
        path: '/track-order',
        name: 'Track Order',
        component: 'trackOrder'
      },
      {
        path: '/register-feeder',
        name: 'Register Feeder',
        component: 'registerFeeder'
      },
      {
        path: '/list-feeder',
        name: 'List Feeder',
        component: 'listFeeder'
      },
    ]
  },
  {
    collapse: true,
    name: 'Daftar SLA',
    state: 'slalist',
    icon: 'mdi mdi-routes',
    child: [
      {
        path: '/route-city',
        name: 'Get SLA Based City',
        component: 'getBasedCity'
      },
      // {
      //   path: '/route-instant',
      //   name: 'Instant',
      //   component: RouteAndPrice
      // },
      // {
      //   path: '/route-sameday',
      //   name: 'Sameday',
      //   component: RouteAndPrice
      // },
      // {
      //   path: '/route-nextday',
      //   name: 'Nextday',
      //   component: RouteAndPrice
      // },
      // {
      //   path: '/route-regular',
      //   name: 'Regular',
      //   component: RouteAndPrice
      // },
    ]
  },
  {
    collapse: true,
    name: 'CRM',
    state: 'crm',
    icon: 'mdi mdi-account',
    child: [
      {
        path: '/users-customer',
        name: 'User',
        component: 'Users'
      },
      // {
      //   path: '/email-to-customer',
      //   name: 'Email to Customer',
      //   component: Feeders
      // },
      // {
      //   path: '/live-chat',
      //   name: 'Live Chat Support',
      //   component: Feeders
      // },
      // {
      //   path: '/banner-promo',
      //   name: 'Banner Promo',
      //   component: Feeders
      // },
      // {
      //   path: '/refferal-code',
      //   name: 'Referral Code',
      //   component: Feeders
      // },
      // {
      //   path: '/promo-code',
      //   name: 'Promo Code',
      //   component: Feeders
      // },
    ]
  },
  {
    collapse: true,
    name: 'Keagenan',
    state: 'agen',
    icon: 'mdi mdi-account-multiple-plus',
    child: [
      {
        path: '/keagenan-agen',
        name: 'Agen',
        component: 'Agen'
      }
    ]
  },
  {
    collapse: true,
    name: 'Tiket Pesawat dan Hotel',
    state: 'flightandhotel',
    icon: 'mdi mdi-ticket',
    child: [
      {
        path: '/flight-orders',
        name: 'Tiket Pesawat',
        component: 'Flights'
      },
      {
        path: '/hotel-orders',
        name: 'Hotel',
        component: 'Feeders'
      },
    ]
  },
  // {
  //   collapse: true,
  //   path: '/partnership',
  //   name: 'Partnership',
  //   state: 'partnership',
  //   icon: 'mdi mdi-home-modern',
  //   child: [
  //     {
  //       path: '/partnership/kulina',
  //       name: 'Kulina',
  //       mini: 'B',
  //       icon: 'mdi mdi-adjust',
  //       component: 'Kulina'
  //     },
  //     {
  //       path: '/partnership/kulina',
  //       name: 'Blibli',
  //       mini: 'B',
  //       icon: 'mdi mdi-adjust',
  //       component: 'Feeders'
  //     },
  //     {
  //       path: '/partnership/kulina',
  //       name: 'BNI',
  //       mini: 'B',
  //       icon: 'mdi mdi-adjust',
  //       component: 'Feeders'
  //     }
  //   ]
  // },
  {
    collapse: true,
    name: 'Trip Store',
    state: 'tripstore',
    icon: 'mdi mdi-store',
    child: [
      {
        path: '/tripstore-order',
        name: 'Order Trip Store',
        component: 'TripStoreOrder'
      },
      {
        path: '/tripstore-toko',
        name: 'Daftar Toko',
        component: 'TripStoreToko'
      }
    ]
  },
  {
    collapse: true,
    path: '/admin',
    name: 'Administrasi',
    state: 'administrasi',
    icon: 'mdi mdi-account-plus',
    child: [{
      path: '/register',
      name: 'Buat Akun Admin',
      component: 'formRegister'

    }]
  },
  { path: '/order/:orderID', name: 'Order Detail', hide_menu: true, component: 'TriplogisticsOrderDetail' },
  { path: '/', pathTo: '/home', name: 'Home', redirect: true }
];
export default dashboards;
