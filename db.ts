export const Admins = [
    {   
        id: 1,
        name: 'admin',
        email: 'admin@example.com',
        password: 'password',
        role: "ADMIN"
    }
]
export const Users = [
    {
        id: 1,
        name: "User 1",
        email: "user1@example.com",
        mobile: "0556698487",
        password: "password",
        resume: {
            job_title: "Developer",
            experience: [
                {
                    job_title: "Developer",
                    company: "Google Inc",
                    start_date: "2017-01-02",
                    end_date: "2019-01-03",
                    industry: "IT Hospitality",
                    education: [
                        {
                            highest_level: "B.Sc",
                            school_name: "ADAMA",
                            date_completed: "2020-01-02"
                        }
                    ]
                }
            ],
            skills: ["Programming", "Team Work"]
        },
        role: ["USER"],
        created_at: "2013-01-01",
        updated_at: "2013-01-02"
    }
]
export const JobApplications = [
    {
        id: 1,
        job_id: 1,
        user_id: 1,
    },
    {
        id: 2,
        job_id: 2,
        user_id: 1,
    },
    {
        id: 3,
        job_id: 1,
        user_id: 3,
    }
]
export const DemoJobs = [
    {
        id: 1,
        type: "Full Time",
        title: "Front End Developer",
        salary: "12000",
        currency: "AED",
        employer: "Google Inc",
        location: "Dubai, UAE",
        datePosted: "2017-01-01",
        dateExpired: "2017-01-10",
    },
    {
        id: 2,
        type: "Full Time",
        title: "Back End Developer",
        salary: "12000",
        currency: "AED",
        employer: "Smart Techies",
        location: "Dubai, UAE",
        datePosted: "2017-01-01",
        dateExpired: "2017-01-10",
    },
    {
        id: 3,
        type: "Full Time",
        title: "Full Stack Developer",
        salary: "12000",
        currency: "AED",
        employer: "EMAAR",
        location: "Dubai, UAE",
        datePosted: "2017-01-01",
        dateExpired: "2017-01-10",
    },
    {
        id: 4,
        type: "Full Time",
        title: "Angular Developer",
        desc: "Talented Angular Developer with 5 year of experience",
        salary: "12000",
        currency: "AED",
        employer: "DAMAC Group",
        location: "Dubai, UAE",
        datePosted: "2017-01-01",
        dateExpired: "2017-01-10",
    },
    {
        id: 5,
        type: "Full Time",
        title: "React Developer",
        salary: "12000",
        currency: "AED",
        employer: "Google Inc",
        location: "Dubai, UAE",
        datePosted: "2017-01-01",
        dateExpired: "2017-01-10",
    },
    {
        id: 6,
        type: "Part Time",
        title: "Computer Graphics and Web / Multimedia Designing, IT Software developer.",
        salary: "12000",
        currency: "AED",
        employer: "Alphabet Inc",
        location: "Dubai, UAE",
        datePosted: "2017-01-01",
        dateExpired: "2017-01-10",
    }
]


export const Job =
{
    jobId: "1",
    estimatedSalary: {
        currency: "USD",
        value: {
            minValue: "None",
            maxValue: "None",
            unitText: "YEAR"
        }
    },
    datePosted: "2019-09-24T00:00:00",
    description: "You are a smart passionate techie who cares about suicide prevention. You have creative and original ideas about how to efficiently integrate a platform that can provide grassroots campaign with Wordpress. You understand everything Wordpress, html, how to create membership login and logout, and how to do custom coding.",
    type: "Full Time",
    title: "Wordpress Developer",
    validThrough: "2019-10-24T00:00:00",
    employmentType: "FULL_TIME",
    hiringOrganization: {
        name: "The Love Story"
    },
    identifier: {
        name: "The Love Story",
        value: "1569590910216317883"
    },
    jobLocation: {
        address: {
            streetAddress: "3809 Riedel Ave",
            addressLocality: "Lake Worth",
            addressRegion: "FL",
            addressCountry: "US"
        }
    },
    baseSalary: {
        currency: "USD",
        value: {
            value: 40.00,
            unitText: "HOUR"
        }
    }
}