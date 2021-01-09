<!DOCTYPE html>

<!--
Template Name: Metronic - Bootstrap 4 HTML, React, Angular 10 & VueJS Admin Dashboard Theme
Author: KeenThemes
Website: http://www.keenthemes.com/
Contact: support@keenthemes.com
Follow: www.twitter.com/keenthemes
Dribbble: www.dribbble.com/keenthemes
Like: www.facebook.com/keenthemes
Purchase: https://1.envato.market/EA4JP
Renew Support: https://1.envato.market/EA4JP
License: You must have a valid license purchased only from themeforest(the above link) in order to legally use the theme for your project.
-->
<html lang="en">
<!--begin::Head-->

<head>
  <base href="" />
  <meta charset="utf-8" />
  <title>Metronic Live preview | Keenthemes</title>
  <meta name="description"
    content="Metronic admin dashboard live demo. Check out all the features of the admin panel. A large number of settings, additional services and widgets." />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link rel="canonical" href="https://keenthemes.com/metronic" />

  {{-- <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
  </script> --}}
  <!--begin::Fonts-->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />

  <!--end::Fonts-->

  <!--begin::Page Vendors Styles(used by this page)-->
  <link href="{{URL::to('/plugins/custom/fullcalendar/fullcalendar.bundle.css')}}" rel="stylesheet" type="text/css" />

  <!--end::Page Vendors Styles-->

  <!--begin::Global Theme Styles(used by all pages)-->
  <link href="{{URL::to('/plugins/global/plugins.bundle.css')}}" rel="stylesheet" type="text/css" />
  <link href="{{URL::to('/plugins/custom/prismjs/prismjs.bundle.css')}}" rel="stylesheet" type="text/css" />
  <link href="{{URL::to('/css/style.bundle.css')}}" rel="stylesheet" type="text/css" />

  <!--end::Global Theme Styles-->

  <!--begin::Layout Themes(used by all pages)-->
  <link href="{{URL::to('/css/themes/layout/header/base/light.css')}}" rel="stylesheet" type="text/css" />
  <link href="{{URL::to('/css/themes/layout/header/menu/light.css')}}" rel="stylesheet" type="text/css" />
  <link href="{{URL::to('/css/themes/layout/brand/dark.css')}}" rel="stylesheet" type="text/css" />
  <link href="{{URL::to('/css/themes/layout/aside/dark.css')}}" rel="stylesheet" type="text/css" />

  {{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"> --}}

  <!-- Compiled and minified JavaScript -->
  {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script> --}}

  <!--end::Layout Themes-->
  <link rel="shortcut icon" href="{{URL::to('/media/logos/favicon.ico')}}" />
</head>

<!--end::Head-->

<!--begin::Body-->

<body id="kt_body"
  class="page-loading-enabled page-loading header-fixed header-mobile-fixed aside-enabled aside-fixed aside-minimize-hoverable footer-fixed page-loading">
  <!--[html-partial:include:{"file":"partials/_page-loader.html"}]/-->

  <div id="app">

  </div>

  <!--[html-partial:include:{"file":"layout.html"}]/-->

  <!--[html-partial:include:{"file":"partials/_extras/offcanvas/quick-user.html"}]/-->


  <!--[html-partial:include:{"file":"partials/_extras/scrolltop.html"}]/-->


  <!--begin::Global Config(global config for global JS scripts)-->
  <script>
    var KTAppSettings = {
        breakpoints: {
          sm: 576,
          md: 768,
          lg: 992,
          xl: 1200,
          xxl: 1400,
        },
        colors: {
          theme: {
            base: {
              white: "#ffffff",
              primary: "#3699FF",
              secondary: "#E5EAEE",
              success: "#1BC5BD",
              info: "#8950FC",
              warning: "#FFA800",
              danger: "#F64E60",
              light: "#E4E6EF",
              dark: "#181C32",
            },
            light: {
              white: "#ffffff",
              primary: "#E1F0FF",
              secondary: "#EBEDF3",
              success: "#C9F7F5",
              info: "#EEE5FF",
              warning: "#FFF4DE",
              danger: "#FFE2E5",
              light: "#F3F6F9",
              dark: "#D6D6E0",
            },
            inverse: {
              white: "#ffffff",
              primary: "#ffffff",
              secondary: "#3F4254",
              success: "#ffffff",
              info: "#ffffff",
              warning: "#ffffff",
              danger: "#ffffff",
              light: "#464E5F",
              dark: "#ffffff",
            },
          },
          gray: {
            "gray-100": "#F3F6F9",
            "gray-200": "#EBEDF3",
            "gray-300": "#E4E6EF",
            "gray-400": "#D1D3E0",
            "gray-500": "#B5B5C3",
            "gray-600": "#7E8299",
            "gray-700": "#5E6278",
            "gray-800": "#3F4254",
            "gray-900": "#181C32",
          },
        },
        "font-family": "Poppins",
      };
  </script>

  <!--end::Global Config-->

  <!--begin::Global Theme Bundle(used by all pages)-->
  <script src="{{URL::to('/plugins/global/plugins.bundle.js')}}"></script>
  <script src="{{URL::to('/plugins/custom/prismjs/prismjs.bundle.js')}}"></script>
  <script src="{{URL::to('/js/scripts.bundle.js')}}"></script>

  <!--end::Global Theme Bundle-->

  <!--begin::Page Vendors(used by this page)-->
  <script src="{{URL::to('/plugins/custom/fullcalendar/fullcalendar.bundle.js')}}"></script>

  <!--end::Page Vendors-->

  <!--begin::Page Scripts(used by this page)-->
  <script src="{{URL::to('/js/pages/widgets.js')}}"></script>
  <script src="{{mix('js/app.js')}}"></script>
  {{-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
  </script> --}}
  <!--end::Page Scripts-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
  <script src="https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous">
  </script>
  {{-- <script src="https://unpkg.com/vue-swal"></script> --}}
</body>

<!--end::Body-->

</html>