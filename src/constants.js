import ksun from "./assets/ksun.png";
import kcloud from "./assets/kcloud.png";
import kwind from "./assets/kwind.png";

export const WEATHER_API_BASEURL = "http://api.openweathermap.org";
export const NASA_API_BASEURL = "https://api.nasa.gov";
export const HOMEPAGELIST = [
  {
    src: ksun,
    alt: "sunny",
    link: "/single-location",
    left: false,
    text: "... what the weather is like in your favourite location",
  },
  {
    src: kcloud,
    alt: "cloudy",
    link: "/compare-locations",
    left: true,
    text: "... where to find better weather if you you cannot make up between two locations",
  },
  {
    src: kwind,
    alt: "windy",
    link: "/far-and-beyond",
    left: false,
    text: "... how weather forecast pioneers into the space",
  },
];

export const d = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1686862800,
      main: {
        temp: 20.23,
        feels_like: 20.4,
        temp_min: 18.98,
        temp_max: 20.23,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 80,
        temp_kf: 1.25,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 5.78,
        deg: 297,
        gust: 9.73,
      },
      visibility: 10000,
      pop: 0.3,
      rain: {
        "3h": 0.18,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-15 21:00:00",
    },
    {
      dt: 1686873600,
      main: {
        temp: 19.54,
        feels_like: 19.66,
        temp_min: 18.16,
        temp_max: 19.54,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 81,
        temp_kf: 1.38,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 8,
      },
      wind: {
        speed: 5.23,
        deg: 300,
        gust: 9.3,
      },
      visibility: 10000,
      pop: 0.25,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-16 00:00:00",
    },
    {
      dt: 1686884400,
      main: {
        temp: 18.54,
        feels_like: 18.49,
        temp_min: 17.7,
        temp_max: 18.54,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1009,
        humidity: 78,
        temp_kf: 0.84,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 5.95,
        deg: 301,
        gust: 10.59,
      },
      visibility: 10000,
      pop: 0.15,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-16 03:00:00",
    },
    {
      dt: 1686895200,
      main: {
        temp: 20.35,
        feels_like: 20.43,
        temp_min: 20.35,
        temp_max: 20.35,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 8.23,
        deg: 312,
        gust: 11.24,
      },
      visibility: 10000,
      pop: 0.04,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-16 06:00:00",
    },
    {
      dt: 1686906000,
      main: {
        temp: 22.61,
        feels_like: 22.57,
        temp_min: 22.61,
        temp_max: 22.61,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 9.47,
        deg: 332,
        gust: 11.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-16 09:00:00",
    },
    {
      dt: 1686916800,
      main: {
        temp: 23.1,
        feels_like: 23.06,
        temp_min: 23.1,
        temp_max: 23.1,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 8.47,
        deg: 344,
        gust: 10.43,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-16 12:00:00",
    },
    {
      dt: 1686927600,
      main: {
        temp: 22.92,
        feels_like: 22.94,
        temp_min: 22.92,
        temp_max: 22.92,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 7.77,
        deg: 329,
        gust: 9.66,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-16 15:00:00",
    },
    {
      dt: 1686938400,
      main: {
        temp: 20.71,
        feels_like: 20.61,
        temp_min: 20.71,
        temp_max: 20.71,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 4.47,
        deg: 309,
        gust: 7.84,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-16 18:00:00",
    },
    {
      dt: 1686949200,
      main: {
        temp: 19.17,
        feels_like: 18.89,
        temp_min: 19.17,
        temp_max: 19.17,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1013,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.7,
        deg: 307,
        gust: 5.95,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-16 21:00:00",
    },
    {
      dt: 1686960000,
      main: {
        temp: 18.73,
        feels_like: 18.33,
        temp_min: 18.73,
        temp_max: 18.73,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1012,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.79,
        deg: 284,
        gust: 10.24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-17 00:00:00",
    },
    {
      dt: 1686970800,
      main: {
        temp: 18.57,
        feels_like: 18.02,
        temp_min: 18.57,
        temp_max: 18.57,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1012,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.18,
        deg: 293,
        gust: 10.06,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-17 03:00:00",
    },
    {
      dt: 1686981600,
      main: {
        temp: 21.66,
        feels_like: 21.47,
        temp_min: 21.66,
        temp_max: 21.66,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1013,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 6.41,
        deg: 312,
        gust: 10.29,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-17 06:00:00",
    },
    {
      dt: 1686992400,
      main: {
        temp: 23.59,
        feels_like: 23.39,
        temp_min: 23.59,
        temp_max: 23.59,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 7.05,
        deg: 338,
        gust: 8.78,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-17 09:00:00",
    },
    {
      dt: 1687003200,
      main: {
        temp: 24.18,
        feels_like: 23.99,
        temp_min: 24.18,
        temp_max: 24.18,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.59,
        deg: 358,
        gust: 7.58,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-17 12:00:00",
    },
    {
      dt: 1687014000,
      main: {
        temp: 24.15,
        feels_like: 23.93,
        temp_min: 24.15,
        temp_max: 24.15,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.06,
        deg: 337,
        gust: 3.81,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-17 15:00:00",
    },
    {
      dt: 1687024800,
      main: {
        temp: 21.92,
        feels_like: 21.76,
        temp_min: 21.92,
        temp_max: 21.92,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.62,
        deg: 276,
        gust: 2.78,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-17 18:00:00",
    },
    {
      dt: 1687035600,
      main: {
        temp: 19.75,
        feels_like: 19.45,
        temp_min: 19.75,
        temp_max: 19.75,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.37,
        deg: 268,
        gust: 3.12,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-17 21:00:00",
    },
    {
      dt: 1687046400,
      main: {
        temp: 18.98,
        feels_like: 18.58,
        temp_min: 18.98,
        temp_max: 18.98,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.05,
        deg: 249,
        gust: 3.02,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-18 00:00:00",
    },
    {
      dt: 1687057200,
      main: {
        temp: 18.52,
        feels_like: 17.97,
        temp_min: 18.52,
        temp_max: 18.52,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 2.71,
        deg: 251,
        gust: 2.8,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-18 03:00:00",
    },
    {
      dt: 1687068000,
      main: {
        temp: 21.81,
        feels_like: 21.53,
        temp_min: 21.81,
        temp_max: 21.81,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 1.99,
        deg: 260,
        gust: 2.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-18 06:00:00",
    },
    {
      dt: 1687078800,
      main: {
        temp: 24.89,
        feels_like: 24.66,
        temp_min: 24.89,
        temp_max: 24.89,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 1.99,
        deg: 356,
        gust: 2.52,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-18 09:00:00",
    },
    {
      dt: 1687089600,
      main: {
        temp: 26.02,
        feels_like: 26.02,
        temp_min: 26.02,
        temp_max: 26.02,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 2.38,
        deg: 43,
        gust: 2.39,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-18 12:00:00",
    },
    {
      dt: 1687100400,
      main: {
        temp: 25.88,
        feels_like: 25.7,
        temp_min: 25.88,
        temp_max: 25.88,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 2.58,
        deg: 90,
        gust: 1.98,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-18 15:00:00",
    },
    {
      dt: 1687111200,
      main: {
        temp: 22.82,
        feels_like: 22.75,
        temp_min: 22.82,
        temp_max: 22.82,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 1.99,
        deg: 136,
        gust: 2.09,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-18 18:00:00",
    },
    {
      dt: 1687122000,
      main: {
        temp: 21.07,
        feels_like: 20.75,
        temp_min: 21.07,
        temp_max: 21.07,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 2.89,
        deg: 217,
        gust: 2.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-18 21:00:00",
    },
    {
      dt: 1687132800,
      main: {
        temp: 20.65,
        feels_like: 20.34,
        temp_min: 20.65,
        temp_max: 20.65,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 2.47,
        deg: 221,
        gust: 2.35,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-19 00:00:00",
    },
    {
      dt: 1687143600,
      main: {
        temp: 20.3,
        feels_like: 19.98,
        temp_min: 20.3,
        temp_max: 20.3,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 16,
      },
      wind: {
        speed: 2.01,
        deg: 203,
        gust: 1.91,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-19 03:00:00",
    },
    {
      dt: 1687154400,
      main: {
        temp: 23.54,
        feels_like: 23.46,
        temp_min: 23.54,
        temp_max: 23.54,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 18,
      },
      wind: {
        speed: 1.39,
        deg: 216,
        gust: 1.55,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-19 06:00:00",
    },
    {
      dt: 1687165200,
      main: {
        temp: 26.81,
        feels_like: 27.13,
        temp_min: 26.81,
        temp_max: 26.81,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 61,
      },
      wind: {
        speed: 1.61,
        deg: 69,
        gust: 1.17,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-19 09:00:00",
    },
    {
      dt: 1687176000,
      main: {
        temp: 27.58,
        feels_like: 27.99,
        temp_min: 27.58,
        temp_max: 27.58,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 70,
      },
      wind: {
        speed: 2.93,
        deg: 70,
        gust: 2.15,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-19 12:00:00",
    },
    {
      dt: 1687186800,
      main: {
        temp: 26.88,
        feels_like: 27.36,
        temp_min: 26.88,
        temp_max: 26.88,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 2.53,
        deg: 104,
        gust: 2.87,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-19 15:00:00",
    },
    {
      dt: 1687197600,
      main: {
        temp: 24.4,
        feels_like: 24.46,
        temp_min: 24.4,
        temp_max: 24.4,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 2.01,
        deg: 130,
        gust: 2.12,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-19 18:00:00",
    },
    {
      dt: 1687208400,
      main: {
        temp: 22.85,
        feels_like: 22.81,
        temp_min: 22.85,
        temp_max: 22.85,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 34,
      },
      wind: {
        speed: 1.38,
        deg: 181,
        gust: 1.67,
      },
      visibility: 10000,
      pop: 0.01,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-19 21:00:00",
    },
    {
      dt: 1687219200,
      main: {
        temp: 22.31,
        feels_like: 22.53,
        temp_min: 22.31,
        temp_max: 22.31,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 20,
      },
      wind: {
        speed: 1.46,
        deg: 230,
        gust: 1.44,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-20 00:00:00",
    },
    {
      dt: 1687230000,
      main: {
        temp: 22,
        feels_like: 22.24,
        temp_min: 22,
        temp_max: 22,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.71,
        deg: 231,
        gust: 1.74,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-20 03:00:00",
    },
    {
      dt: 1687240800,
      main: {
        temp: 24.99,
        feels_like: 25.35,
        temp_min: 24.99,
        temp_max: 24.99,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0.89,
        deg: 205,
        gust: 0.97,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-20 06:00:00",
    },
    {
      dt: 1687251600,
      main: {
        temp: 28.18,
        feels_like: 29.72,
        temp_min: 28.18,
        temp_max: 28.18,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 2.44,
        deg: 102,
        gust: 2.54,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-20 09:00:00",
    },
    {
      dt: 1687262400,
      main: {
        temp: 28.84,
        feels_like: 31.06,
        temp_min: 28.84,
        temp_max: 28.84,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 4.14,
        deg: 66,
        gust: 3.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-20 12:00:00",
    },
    {
      dt: 1687273200,
      main: {
        temp: 27.97,
        feels_like: 29.41,
        temp_min: 27.97,
        temp_max: 27.97,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 61,
      },
      wind: {
        speed: 2.95,
        deg: 114,
        gust: 3.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-20 15:00:00",
    },
    {
      dt: 1687284000,
      main: {
        temp: 25.54,
        feels_like: 25.95,
        temp_min: 25.54,
        temp_max: 25.54,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1013,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 38,
      },
      wind: {
        speed: 3.06,
        deg: 132,
        gust: 3.7,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-20 18:00:00",
    },
  ],
  city: {
    id: 7290694,
    name: "Marina di Vasto",
    coord: {
      lat: 42.0937,
      lon: 14.7268,
    },
    country: "IT",
    population: 0,
    timezone: 7200,
    sunrise: 1686799480,
    sunset: 1686854304,
  },
};
