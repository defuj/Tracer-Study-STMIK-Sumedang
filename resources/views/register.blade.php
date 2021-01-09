@extends('layout.auth')

@section('content')
<div class="login-signin">
  <div class="mb-20">
    <h3 class="opacity-40 font-weight-normal">{{$title}}</h3>
    <p class="opacity-40">{{$subtitle}}</p>
    @if ($errors->has('cek'))
    <p>{{$errors->first('cek')}}</p>
    @endif
    {{-- @if (Session::has('ErrorPassword'))
    <div class="alert alert-danger" role="alert">
      <span class="font-size-lg">{{ Session::get('ErrorPassword') }}</span>
  </div>
  @endif --}}
</div>
<form class="form" method="POST" action="{{route('postRegister')}}">
  @csrf
  <div class="form-group">
    <input
      class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8 @if($errors->has('nama')) is-invalid @endif"
      type="text" placeholder="Masukan Nama" id="nama" name="nama" autocomplete="off" />
    @if($errors->has('nama'))
    <div class="float-left text-danger mb-3 pl-5">{{ $errors->first('nama') }}</div>
    @endif
  </div>
  <div class="form-group">
    <input
      class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8 @if($errors->has('nim')) is-invalid @endif"
      type="text" placeholder="Masukan Nim" id="nim" name="nim" autocomplete="off" />
    @if($errors->has('nim'))
    <div class="float-left text-danger mb-3 pl-5">{{ $errors->first('nim') }}</div>
    @endif
  </div>
  <div class="form-group">
    <input
      class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8 @if($errors->has('tanggal_lahir')) is-invalid @endif"
      type="text" placeholder="Masukan Tanggal Lahir" id="tanggal_lahir" name="tanggal_lahir" autocomplete="off"
      readonly />
    @if($errors->has('tanggal_lahir'))
    <div class="float-left text-danger mb-3 pl-5">{{ $errors->first('tanggal_lahir') }}</div>
    @endif
  </div>
  <div class="form-group">
    <input
      class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8 @if($errors->has('password')) is-invalid @endif"
      type="password" placeholder="Masukan Password" id="password" name="password" />
    @if($errors->has('password'))
    <div class="float-left text-danger mb-3 pl-5">{{ $errors->first('password') }}</div>
    @endif
  </div>
  <div class="form-group">
    <input
      class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8 @if($errors->has('password')) is-invalid @endif"
      type="password" placeholder="Masukan Password yang sama" id="password_confirmation"
      name="password_confirmation" />
  </div>
  <div class="form-group text-center mt-10">
    <button type="submit" id="kt_login_register_submit"
      class="btn btn-pill btn-primary opacity-90 px-15 py-3">Register</button>
  </div>
</form>
</div>
<script>
  $(document).ready(function(){
    $('#tanggal_lahir').datepicker({
      format: 'dd-mm-yyyy'
    })
    // alert(123)
  })
</script>
@endsection