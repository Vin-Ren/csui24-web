

type TeamMember = {
  link: string,
  nickname: string,
  fontNickname: [string,string],
  fullname: string,
  Divisi: string,
  fontDivisi: [string,string],
  image: string,
  image2:string
}


type Team = {
  Team: string,
  member: TeamMember[]
}

type Teams = Team[]


const ourTeam: Teams = [
  {
    Team: "Core Team",
    member: [
      {
        link: "/team/tirta-rendy-siahaan",
        nickname: "TIRTA",
        fontNickname: ["45px", "30px"],
        fullname: "Tirta Rendy S",
        Divisi: "CORE",
        fontDivisi: ["50px", "35px"],
        image: "/team/tirta-rendy-siahaan1.png",
        image2: "/team/tirta-rendy-siahaan2.png",
      },
      {
        link: "/team/muhammad-hamiz-ghani-ayusha",
        nickname: "GHANI",
        fontNickname: ["45px", "30px"],
        fullname: "Hamiz Ghani",
        Divisi: "CORE",
        fontDivisi: ["50px", "35px"],
        image: "/team/muhammad-hamiz-ghani-ayusha1.png",
        image2: "/team/muhammad-hamiz-ghani-ayusha2.png",
      },
      {
        link: "/team/geraldus-catur-gigih-wahyudi",
        nickname: "GIGIH",
        fontNickname: ["45px", "30px"],
        fullname: "Geraldus Catur Gigih",
        Divisi: "CORE",
        fontDivisi: ["50px", "35px"],
        image: "/team/geraldus-catur-gigih-wahyudi1.png",
        image2: "/team/geraldus-catur-gigih-wahyudi2.png",
      },
    ],
  },
  {
    Team: "IT Developer",
    member: [
      {
        link: "/team/muhammad-fauzan",
        nickname: "FAUZAN",
        fontNickname: ["38px", "27px"],
        fullname: "Muhammad Fauzan",
        Divisi: "IT DEV",
        fontDivisi: ["45px", "27px"],
        image: "/team/muhammad-fauzan1.png",
        image2: "/team/muhammad-fauzan2.png",
      },
      {
        link: "/team/gerry-bima-putra",
        nickname: "GERRY",
        fontNickname: ["45px", "30px"],
        fullname: "Gerry Bima Putra",
        Divisi: "IT DEV",
        fontDivisi: ["45px", "27px"],
        image: "/team/gerry-bima-putra1.png",
        image2: "/team/gerry-bima-putra2.png",
      },
      {
        link: "/team/muhamad-hakim-nizami",
        nickname: "HAKIM",
        fontNickname: ["42px", "28px"],
        fullname: "Hakim Nizami",
        Divisi: "IT DEV",
        fontDivisi: ["45px", "27px"],
        image: "/team/muhamad-hakim-nizami1.png",
        image2: "/team/muhamad-hakim-nizami2.png",
      },
      {
        link: "/team/kevin-cornellius-widjaja",
        nickname: "KEVIN",
        fontNickname: ["45px", "30px"],
        fullname: "Kevin Cornellius",
        Divisi: "IT DEV",
        fontDivisi: ["45px", "27px"],
        image: "/team/kevin-cornellius-widjaja1.png",
        image2: "/team/kevin-cornellius-widjaja2.png",
      },
      {
        link: "/team/radhya-cahya-kusuma",
        nickname: "RADHYA",
        fontNickname: ["35px", "25px"],
        fullname: "Radhya Cahya",
        Divisi: "IT DEV",
        fontDivisi: ["45px", "27px"],
        image: "/team/radhya-cahya-kusuma1.png",
        image2: "/team/radhya-cahya-kusuma2.png",
      },
      {
        link: "/team/vincent-valentino-oei",
        nickname: "VINCENT",
        fontNickname: ["33px", "22px"],
        fullname: "Vincent Valentino",
        Divisi: "IT DEV",
        fontDivisi: ["45px", "27px"],
        image: "/team/vincent-valentino-oei1.png",
        image2: "/team/vincent-valentino-oei2.png",
      },
    ],
  },
  {
    Team: "UI/UX Designer",
    member: [
      {
        link: "/team/kadek-chandra-rasmi",
        nickname: "CHANDRA",
        fontNickname: ["30px", "20px"],
        fullname: "Kadek Chandra",
        Divisi: "UI/UX",
        fontDivisi: ["45px", "27px"],
        image: "/team/kadek-chandra-rasmi1.png",
        image2: "/team/kadek-chandra-rasmi2.png",
      },
      {
        link: "/team/nadin-ananda",
        nickname: "NADIN",
        fontNickname: ["45px", "32px"],
        fullname: "Nadin Ananda",
        Divisi: "UI/UX",
        fontDivisi: ["45px", "27px"],
        image: "/team/nadin-ananda1.png",
        image2: "/team/nadin-ananda2.png",
      },
    ],
  },
  {
    Team: "Akademik",
    member: [
      {
        link: "/team/go-nadine-audelia",
        nickname: "NADINE",
        fontNickname: ["38px", "27px"],
        fullname: "Go Nadine Audelia",
        Divisi: "Akademik",
        fontDivisi: ["30px", "20px"],
        image: "/team/go-nadine-audelia1.png",
        image2: "/team/go-nadine-audelia2.png",
      },
      {
        link: "/team/riyaan-baihaqi",
        nickname: "RIYAAN",
        fontNickname: ["38px", "27px"],
        fullname: "Riyaan Baihaqi",
        Divisi: "Akademik",
        fontDivisi: ["30px", "20px"],
        image: "/team/riyaan-baihaqi1.png",
        image2: "/team/riyaan-baihaqi2.png",
      },
      {
        link: "/team/naomi-shakila-isbono",
        nickname: "NAOMI",
        fontNickname: ["42px", "28px"],
        fullname: "Naomi Shakila Isbono",
        Divisi: "Akademik",
        fontDivisi: ["30px", "20px"],
        image: "/team/naomi-shakila-isbono1.png",
        image2: "/team/naomi-shakila-isbono2.png",
      },
    ],
  },
];

  
  export default ourTeam;
  