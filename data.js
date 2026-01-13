 const membersDetails= [
  {
    "memberId": 101,
    "fullName": "Eikev Dennis Ng'ang'a Mbugua",
    "age": 26,
    "gender": "Male",
    "contact": {
      "email": "eikev@example.com",
      "phone": "+254712345678"
    },
    "membership": {
      "status": "Active",
      "joinedDate": "2020-08-08",
      "group": "Youth"
    },
    "attendance": [
      {"serviceDate": "2026-01-10", "serviceType": "Sunday Service", "status": "Present"},
      {"serviceDate": "2026-01-12", "serviceType": "Bible Study", "status": "Absent"}
    ],
    "roles": ["Usher", "Choir Member"],
    "notes": "Very active in youth programs"
  },
  {
    "memberId": 102,
    "fullName": "Jane Smith",
    "age": 24,
    "gender": "Female",
    "contact": {
      "email": "jane@example.com",
      "phone": "+254712345679"
    },
    "membership": {
      "status": "Active",
      "joinedDate": "2021-02-15",
      "group": "Youth"
    },
    "attendance": [
      {"serviceDate": "2026-01-10", "serviceType": "Sunday Service", "status": "Present"},
      {"serviceDate": "2026-01-12", "serviceType": "Bible Study", "status": "Present"}
    ],
    "roles": ["Bible Study Leader"],
    "notes": "Leads youth Bible study sessions"
  },
  {
    "memberId": 103,
    "fullName": "Samuel Mwangi",
    "age": 30,
    "gender": "Male",
    "contact": {
      "email": "samuel@example.com",
      "phone": "+254712345680"
    },
    "membership": {
      "status": "Active",
      "joinedDate": "2019-05-20",
      "group": "Choir"
    },
    "attendance": [
      {"serviceDate": "2026-01-10", "serviceType": "Sunday Service", "status": "Present"},
      {"serviceDate": "2026-01-12", "serviceType": "Choir Practice", "status": "Present"}
    ],
    "roles": ["Choir Member"],
    "notes": "Plays keyboard in choir"
  },
  {
    "memberId": 104,
    "fullName": "Mercy Wanjiru",
    "age": 28,
    "gender": "Female",
    "contact": {
      "email": "mercy@example.com",
      "phone": "+254712345681"
    },
    "membership": {
      "status": "Active",
      "joinedDate": "2022-03-10",
      "group": "Women Fellowship"
    },
    "attendance": [
      {"serviceDate": "2026-01-10", "serviceType": "Sunday Service", "status": "Absent"},
      {"serviceDate": "2026-01-12", "serviceType": "Women Fellowship Meeting", "status": "Present"}
    ],
    "roles": ["Treasurer"],
    "notes": "Manages Women Fellowship finances"
  },
  {
    "memberId": 105,
    "fullName": "David Otieno",
    "age": 35,
    "gender": "Male",
    "contact": {
      "email": "david@example.com",
      "phone": "+254712345682"
    },
    "membership": {
      "status": "Inactive",
      "joinedDate": "2015-11-01",
      "group": "Men Fellowship"
    },
    "attendance": [
      {"serviceDate": "2026-01-10", "serviceType": "Sunday Service", "status": "Absent"},
      {"serviceDate": "2026-01-12", "serviceType": "Men Fellowship Meeting", "status": "Absent"}
    ],
    "roles": ["Member"],
    "notes": "Currently on leave from fellowship activities"
  }
]


module.exports = {membersDetails}