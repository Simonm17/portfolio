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
            "“Sesigned to keep track of your medigal-legal appointments.”",
        },
        {
          title: "Manage your account easily.",
          description:
            "“Uses Django all-auth and O'Auth logins to keep your account safe and simple.”",
        },
        {
          title: "It's part of something bigger.",
          description:
            "“Scheduling your appointments is just one of many features to come in a legal case management software system.”",
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
          title: "Foundation to any good project",
          description:
            "“Create efficient account management systems.”",
        },
        {
          title: "Looks fresh and clean.",
          description:
            "“Built to look sharp and crisp.”",
        },
        {
          title: "Rinse and repeat.",
          description:
            "“Built to be reused again and again.”",
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
          title: "This is where it all began.",
          description:
            "“Showcasing my first project that started it all.”",
        },
        {
          title: "One framework, countless websites.",
          description:
            "“Demonstrating the limitless potential of Django.”",
        },
        {
          title: "Start here now.",
          description:
            "“Start your own coding journey with a basic blog app as soon as today!”",
        },
      ],
    },
  ];
};