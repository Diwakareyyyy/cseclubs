export interface Member {
  name: string;
  designation: string;
  department: string;
  photo: string; // path in /members/photos/
  linkedin: string;
}

export interface Leadership {
  name: string;
  designation: string;
  department: string;
  photo: string;
  linkedin: string;
}

// These leaders and staff are shared between both clubs
export const leaders: Leadership[] = [
  {
    name: "Dr.R.Palson Kennedy",
    designation: "Principal",
    department: "PERI-IT",
    photo: "/members/leaders/leader1.jpg",
    linkedin: "https://www.linkedin.com/in/rajagopal-palson-kennedy-02aab226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Dr.B.Magesh",
    designation: "Vice-Principal",
    department: "PERI-IT",
    photo: "/members/leaders/leader2.jpg",
    linkedin: "https://www.linkedin.com/in/dr-magesh-balakrishnan-793331128?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Dr.D.Manohari",
    designation: "Head of Department",
    department: "CSE",
    photo: "/members/leaders/leader3.jpg",
    linkedin: "https://www.linkedin.com/in/manohari-dorairaj-b3853074?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

export const staffCoordinators: Leadership[] = [
  {
    name: "Duraimurugan S",
    designation: "Faculty Coordinator",
    department: "CSE",
    photo: "/members/leaders/staff1.jpg",
    linkedin: "",
  },
  {
    name: "Divya M",
    designation: "Faculty Coordinator",
    department: "CSE",
    photo: "/members/leaders/staff2.jpg",
    linkedin: "",
  },
  {
    name: "Dharmaprakesh",
    designation: "Faculty Coordinator",
    department: "CSE",
    photo: "/members/leaders/staff3.jpg",
    linkedin: "https://www.linkedin.com/in/v-dharma-prakash-8aa55654",
  },
];

export const  cyberKnightsMembers: Member[] = [
  {
    name: "Birundha J",
    designation: "President ",
    department: "CSE",
    photo: "/members/cyber-knights/member1.jpg",
    linkedin: "https://www.linkedin.com/in/birundha-jayakrishnan-9a010428b",
  },
  {
    name: "Chukka Gayathri Preethi",
    designation: "Vice-President",
    department: "CSE",
    photo: "/members/cyber-knights/member2.jpg",
    linkedin: "https://www.linkedin.com/in/gayatri-preethi-chukka-788064329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Diwakar S",
    designation: "Secretary",
    department: "CSE",
    photo: "/members/cyber-knights/member3.jpg",
    linkedin: "https://www.linkedin.com/in/s-diwakar-164169291/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Gopika J",
    designation: "Joint Secretary",
    department: "CSE",
    photo: "/members/cyber-knights/member4.jpg",
    linkedin: "https://www.linkedin.com/in/gopikaj-gopikaj-864800351?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Jenish jose gideon",
    designation: "Treasurer",
    department: "CSE",
    photo: "/members/cyber-knights/member5.jpg",
    linkedin: "https://www.linkedin.com/in/jenish-jose-gideon-556bba31a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Indhu S",
    designation: "Joint-Treasurer",
    department: "CSE",
    photo: "/members/cyber-knights/member6.jpg",
    linkedin: "https://www.linkedin.com/in/indhu-saravanan-1b057038b",
  },
  {
    name: "Priyadharshini S",
    designation: "Student Secretary",
    department: "CSE",
    photo: "/members/cyber-knights/member7.jpg",
    linkedin: "https://www.linkedin.com/in/priyadharshini-s-b903ab291?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Sandhiya E",
    designation: "Student Secretary",
    department: "CSE",
    photo: "/members/cyber-knights/member8.jpg",
    linkedin: "https://www.linkedin.com/in/sandhiya-e-3a560b292/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Dhaunshkumar M",
    designation: "Student Secretary",
    department: "CSE",
    photo: "/members/cyber-knights/member9.jpg",
    linkedin: "https://www.linkedin.com/in/dhanush-kumar-08b052329?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "yuvakrishanan M",
    designation: "Student Secretary",
    department: "CSE",
    photo: "/members/cyber-knights/member10.jpg",
    linkedin: "https://www.linkedin.com/in/m-yuvakrishna-148952326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Heerashini SP",
    designation:"Committee Member",
    department: "CSE",
    photo: "/members/cyber-knights/member11.jpg",
    linkedin: "https://www.linkedin.com/in/heerashini-sp-71272a273 ",
  },
  {
    name: "Mukitha",
    designation:"Co-Committee Member",
    department: "CSE",
    photo: "/members/cyber-knights/member12.jpg",
    linkedin: "https://www.linkedin.com/in/mukitha-k-48b359335?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];
export const scriptSoldiersMembers:Member[] = [
  {
    name: "Vikram A",
    designation: "President",
    department: "CSE",
    photo: "/members/script-soldiers/member1.jpg",
    linkedin: "www.linkedin.com/in/mrvrajk131054197an",
  },
  {
    name: "Hakesh S",
    designation: "Vice-President",
    department: "AIML",
    photo: "/members/script-soldiers/member2.jpg",
    linkedin: "https://www.linkedin.com/in/hakesh-sivaprakasam-07285732b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Shanmuga Sundaram ",
    designation: "Secretary",
    department: "CSE",
    photo: "/members/script-soldiers/member3.jpg",
    linkedin: "https://www.linkedin.com/in/shanmugam-sundaram-40a761355/?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Mathiazhagan R",
    designation: "Joint-Secretary",
    department: "CSE",
    photo: "/members/script-soldiers/member4.jpg",
    linkedin: "https://www.linkedin.com/in/mathi-ramajayam-494a19330?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Saravanan V",
    designation: "Treasurer",
    department: "CSE",
    photo: "/members/script-soldiers/member5.jpg",
    linkedin: "https://www.linkedin.com/in/saravanan-v16062005/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
  },
  {
    name: "Sharan D",
    designation: "Joint-Treasurer",
    department: "CSE",
    photo: "/members/script-soldiers/member6.jpg",
    linkedin: "https://www.linkedin.com/in/d-sharan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Gopika R",
    designation: "Student Secretary",
    department: "CSE",
    photo: "/members/script-soldiers/member7.jpg",
    linkedin: "https://www.linkedin.com/in/gopika-r-1a22b42b5",
  },
  {
    name: "Dheaneswaran M",
    designation: "Student Secretary",
    department: "CSE",
    photo: "/members/script-soldiers/member8.jpg",
    linkedin: "https://www.linkedin.com/in/gopika-r-1a22b42b5 ",
  },
  {
    name: "Adhithya R",
    designation: "Student Secretary",
    department: "CSE",
    photo: "/members/script-soldiers/member9.jpg",
    linkedin: "https://www.linkedin.com/in/adhithya-rajadurai-54507a331?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Varshaa B",
    designation: "Student Secretary",
    department: "CSE",
    photo: "/members/script-soldiers/member10.jpg",
    linkedin: "https://www.linkedin.com/in/varshaa-b-varshaa-442536320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Srinidhi U",
    designation: "Committee member",
    department: "CSE",
    photo: "/members/script-soldiers/member11.jpg",
    linkedin: "https://www.linkedin.com/in/srinidhi-shankar-91a244292/",
  },
   {
    name: "Inoshiya",
    designation: "Co-Committee member",
    department: "CSE",
    photo: "/members/script-soldiers/member12.jpg",
    linkedin: "https://www.linkedin.com/in/inoshiya-a-bb18b532b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];
