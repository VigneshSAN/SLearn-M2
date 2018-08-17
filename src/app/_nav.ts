export const navigation = [

  {
    title: true,
    name: 'Master Entry'
  },
  {
    name: 'Departments',
    url: '/departments/departments-list',
    icon: 'icon-book-open',
  },
  {
    name: 'Batch',
    url: '/batch/batch-list',
    icon: 'icon-pencil',
  },
  {
    name: 'Term',
    url: '/term/term-list',
    icon: 'icon-notebook',
  },
  {
    name: 'Events',
    url: '/events/events-list',
    icon: 'icon-trophy',
  },
  {
    name: 'Course',
    url: '/course/course-list',
    icon: 'icon-cursor',
  },
  {
    name: 'Students',
    url: '/students/students-list',
    icon: 'icon-people',
  },
  {
    name: 'Staff',
    url: '/staffs/staffs-list',
    icon: 'icon-eyeglass',
  },
  {
    title: true,
    name: 'Manage Classes'
  },
  {
    name: 'Time Table',
    url: '/time-table',
    icon: 'icon-user',
    children: [
      {
        name: 'Manual',
        url: '/time-table/manual-tt',
        icon: 'icon-speedometer'
      },
      {
        name: 'Automatic',
        url: '/time-table/automatic-tt',
        icon: 'icon-speedometer'
      },
      {
        name: 'View',
        url: '/time-table/view-tt',
        icon: 'icon-speedometer'
      },
    ]
  },
  {
    title: true,
    name: 'People Management'
  },
  {
    name: 'Students',
    url: '/students',
    icon: 'icon-user',
    children: [
      {
        name: 'Dashboard',
        url: '/students/dashboard',
        icon: 'icon-speedometer'
      },
      // {
      //   name: 'Add Students',
      //   url: '/students/add-students',
      //   icon: 'icon-user-follow'
      // },
      // {
      //   name: 'Students List',
      //   url: '/students/students-list',
      //   icon: 'icon-people'
      // },
      // {
      //   name: 'Student Details',
      //   url: '/students/student-details',
      //   icon: 'icon-user-following'
      // },
      {
        name: 'Leave Request',
        url: '/students/leave-request',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Staffs',
    url: '/staffs',
    icon: 'icon-graduation',
    children: [
      {
        name: 'Dashboard',
        url: '/staffs/dashboard',
        icon: 'icon-speedometer'
      },
      // {
      //   name: 'Add Staffs',
      //   url: '/staffs/add-staffs',
      //   icon: 'icon-chemistry'
      // },
      // {
      //   name: 'Staffs List',
      //   url: '/staffs/staffs-list',
      //   icon: 'icon-eyeglass'
      // },
      {
        name: 'Staff Details',
        url: '/staffs/staff-details',
        icon: 'icon-puzzle'
      },
      {
        name: 'Leave Request',
        url: '/staffs/leave-request',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Parents',
    url: '/parents',
    icon: 'fa fa-users',
    children: [
      {
        name: 'Dashboard',
        url: '/parents/dashboard',
        icon: 'icon-speedometer'
      },
      {
        name: 'Add Parents',
        url: '/parents/add-parents',
        icon: 'fa fa-user-plus'
      },
      {
        name: 'Parents List',
        url: '/parents/parents-list',
        icon: 'fa fa-users'
      },
      {
        name: 'Parents Details',
        url: '/parents/parent-details',
        icon: 'fa fa-street-view'
      },
    ]
  }
];


export const navigation_students = [
  {
    name: 'Students',
    url: '/students',
    icon: 'icon-user',
    children: [
      {
        name: 'Dashboard',
        url: '/students/dashboard',
        icon: 'icon-speedometer'
      },
      {
        name: 'Leave Request',
        url: '/students/leave-request',
        icon: 'icon-puzzle'
      },
    ]
  },
];

export const navigation_staff = [
  {
    name: 'Staffs',
    url: '/staffs',
    icon: 'icon-graduation',
    children: [
      {
        name: 'Dashboard',
        url: '/staffs/dashboard',
        icon: 'icon-speedometer'
      },
      {
        name: 'Staff Details',
        url: '/staffs/staff-details',
        icon: 'icon-puzzle'
      },
      {
        name: 'Leave Request',
        url: '/staffs/leave-request',
        icon: 'icon-puzzle'
      },
    ]
  }

];

