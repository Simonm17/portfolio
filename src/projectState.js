//Import Images
import meeting from './img/meeting.jpg';
import meeting2 from './img/meeting2.jpg';
import boilerplate from './img/boilerplate.jpg';
import boilerplate2 from './img/boilerplate2.jpg';
import blog from './img/blog.jpg';
import blog2 from './img/blog2.jpg';

export const ProjectState = () => {
  return [
    {
      title: "Runetask",
      mainImg: meeting,
      secondaryImg: meeting2,
      url: "/projects/runetask",
      website: "https://compassionate-tesla-028027.netlify.app/",
      github: "https://github.com/Simonm17/runetask",
      infos: [
        {
          title: "Pursue your goals.",
          description:
            "“Keep track of your in-game tasks.”",
        },
        {
          title: "Experience DRF.",
          description:
            "“Django REST Framework uses ModelViewSets to conveniently serialize your data.”",
        },
        {
          title: "It comes decoupled.",
          description:
            "“Runetask uses Django and React separately to showcase traditional API uses.”",
        },
      ],
    },
    {
      title: "Django Boilerplate",
      mainImg: boilerplate,
      url: "/projects/django-boilerplate",
      secondaryImg: boilerplate2,
      website: "https://fierce-badlands-45950.herokuapp.com/",
      github: "https://github.com/Simonm17/django_boilerplate",
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
      website:"https://blog-of-tuna.herokuapp.com/",
      github: "https://github.com/Simonm17/django_blog",
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