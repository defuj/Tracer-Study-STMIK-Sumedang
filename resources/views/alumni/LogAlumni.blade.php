{{-- <html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="Yinka Enoch Adedokun">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <link href="{{URL::to('/css/Alumni.css')}}" rel="stylesheet" type="text/css" />
<title>Login Page</title>
</head>

<body>
  <!-- Main Content -->
  <div class="container-fluid">
    <div class="row main-content bg-success text-center">
      <div class="col-md-4 text-center company__info">
        <span class="company__logo mb-4">
          <img src="/media/logos/LOGO-PNG.png" style="width: 50%" alt="" />
        </span>
        <span class="h2">TRACER STUDY</span>
      </div>
      <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
        <div class="container-fluid">
          <div class="row my-4">
            <div class="col-12 d-flex justify-content-center">
              <span class="h2">Login Page</span>
            </div>
          </div>
          <form>
            <div class="form-group">
              <label for="nim">NIM</label>
              <input type="text" class="form-control" id="nim" name="nim" autocomplete="off">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" name="password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          <div class="row d-flex justify-content-center">
            <p>Jika belum mempunyai akun silahkan daftar <a href="#">Disini</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer -->
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
  integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

</html> --}}

@extends('layout.auth')

@section('content')
<div class="login-signin">
  <div class="mb-20">
    <h3 class="opacity-40 font-weight-normal">Sign In</h3>
    <p class="opacity-40">Masukan NIM dan Password</p>
    @if(session()->has('register'))
    <h4 class="bg-primary rounded-lg p-3">{{session('register')}}</h4>
    @endif
    @if (session('gagalLogin'))
    <div class="mt-4">
      <span class="alert alert-danger ">{{ session('gagalLogin') }}</span>
    </div>
    @endif
  </div>

  <form class="form" method="POST" action="{{route('postLoginAlumni')}}">
    @csrf
    <div class="form-group">
      <input
        class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8 @if(session('gagalLogin')) is-invalid @endif"
        type="text" placeholder="Masukan NIM" id="nim" name="nim" autocomplete="off" />
    </div>
    <div class="form-group">
      <input
        class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8 @if(session('gagalLogin')) is-invalid @endif"
        type="password" placeholder="Masukan Password" id="password" name="password" />
    </div>
    <div class="form-group text-center mt-10">
      <button type="submit" id="kt_login_signin_submit" class="btn btn-pill btn-primary opacity-90 px-15 py-3">Sign
        In</button>
    </div>
  </form>
  <span>jika belum mempunyai akun silahkan daftar <a href="<?= URL::to('/register');?>">Disini</a></span>
</div>
@endsection