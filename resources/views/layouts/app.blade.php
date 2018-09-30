@extends('layouts.base')

@section('template')
    <section class="body" id="app">

        @include('layouts.app-header')

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
