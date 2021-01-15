//Import Images
import meeting from './img/meeting.jpg';
import meeting2 from './img/meeting2.jpg';
import boilerplate from './img/boilerplate.jpg';
import boilerplate2 from './img/boilerplate2.jpg';
import blog from './img/blog.jpg';
import blog2 from './img/blog2.jpg';

export const MovieState = () => {
  return [
    {
      title: "Scheduler",
      mainImg: meeting,
      secondaryImg: meeting2,
      url: "/projects/scheduler",
      link: "https://github.com/Simonm17/scheduler",
      infos: [
        {
          title: "Schedule your QME's.",
          description:
            "“Keep track of your medigal-legal appointments.”",
        },
        {
          title: "Manage your account easily.",
          description:
            "“Uses Django all-auth and OAuth2 login to keep your account simple and secure.”",
        },
        {
          title: "It's part of something bigger.",
          description:
            "“Introducing one of many features to come in a legal management software system.”",
        },
      ],
    },
    {
      title: "Django Boilerplate",
      mainImg: boilerplate,
      url: "/projects/django-boilerplate",
      secondaryImg: boilerplate2,
      link: "https://github.com/Simonm17/django_boilerplate",
      infos: [
        {
          title: "Build a strong foundation",
          description:
            "“Create your website starting with a good setup.”",
        },
        {
          title: "KISS",
          description:
            "“Keep it simple, stupid. Great advice, hurts my feelings every time.”",
        },
        {
          title: "Rinse and repeat.",
          description:
            "“Use the template to build all your website!”",
        },
      ],
    },
    {
      title: "Ryan's Personal Blog",
      mainImg: blog,
      url: "/projects/blog",
      secondaryImg: blog2,
      link: "https://github.com/Simonm17/django_blog",
      infos: [
        {
          title: "My journey began here.",
          description:
            "“Showcasing my first project that started it all.”",
        },
        {
          title: "One framework, infinite websites.",
          description:
            "“Demonstrating the limitless potential of Django.”",
        },
        {
          title: "Start here now.",
          description:
            "“Start your own coding journey with a basic web app today!”",
        },
      ],
    },
  ];
};