@extends('layout.auth')

@section('content')
<div class="login-signin">
  <div class="mb-20">
    <h3 class="opacity-40 font-weight-normal">Sign In To Admin Page</h3>
    <p class="opacity-40">Masukan Username dan Password</p>
    @if (session('gagalLogin'))
    <div class="mt-4">

      <span class="alert alert-danger ">{{ session('gagalLogin') }}</span>
    </div>
    @endif
  </div>

  <form class="form" method="POST" action="{{route('adminLoginPost')}}">
    @csrf
    <div class="form-group">
      <input
        class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8 @if(session('gagalLogin')) is-invalid @endif"
        type="text" placeholder="Masukan Username" id="username" name="username" autocomplete="off" />
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
</div>
@endsection