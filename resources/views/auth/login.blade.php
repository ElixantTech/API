@extends('layouts.base')

@section('template')
<section class="body-sign" id="app">
    <div class="center-sign">
        <a class="logo float-left">
            <img src="{{ asset('img/logo.png') }}" height="54" />
        </a>

        <div class="panel card-sign">
            <div class="card-title-sign mt-3 text-right">
                <h2 class="title text-uppercase font-weight-bold m-0">
                    <i class="fas fa-user mr-1"></i> Login
                </h2>
            </div>

            <div class="card-body">
                <login-page-form destination="{{ route('login') }}"></login-page-form>
            </div>
        </div>
    </div>
</section>
@endsection
