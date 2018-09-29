@extends('layouts.base')

@section('template')
    <section class="body" id="app">

        <header class="header">
            <div class="logo-container">
                <a href="{{ url('dashboard') }}" class="logo">
                    <img src="{{ asset('img/logo-small.png') }}" width="75" height="35" alt="{{ config('app.name') }}">
                </a>
            </div>
        </header>

        <div class="inner-wrapper">

            <aside id="sidebar-left" class="sidebar-left">

            </aside>

            <section role="main" class="content-body">

                <main class="py-4">
                    @yield('content')
                </main>

            </section>

        </div>

    </section>
@endsection
