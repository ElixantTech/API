@extends('layouts.base')

@section('template')
    <section class="body" id="app">

        <header class="header">
            <div class="logo-container">
                <a href="{{ url('dashboard') }}" class="logo">
                    <img src="{{ asset('img/logo-small.png') }}" height="35" alt="{{ config('app.name') }}">
                </a>

                <div class="d-md-none toggle-sidebar-left" data-toggle-class="sidebar-left-opened" data-target="html" data-fire-event="sidebar-left-opened">
                    <i class="fas fa-bars" aria-label="Toggle sidebar"></i>
                </div>
            </div>

            <div class="header-right">

                <form action="#" class="search nav-form">
                    <div class="input-group">
                        <input type="text" class="form-control" name="q" id="q" placeholder="Search...">
                        <span class="input-group-append">
								<button class="btn btn-default" type="submit"><i class="fas fa-search"></i></button>
							</span>
                    </div>
                </form>

                <span class="separator"></span>

                <ul class="notifications">
                    <li>
                        <a href="#" class="dropdown-toggle notifications-icon" data-toggle="dropdown">
                            <i class="fas fa-tasks"></i>
                        </a>

                        <div class="dropdown-menu notification-menu large">
                            <div class="notification-title">
                                <span class="float-right badge badge-default">0</span>
                                Active Tasks
                            </div>

                            <div class="content">
                                <ul>
                                    <li>
                                        <p class="clearfix mb-1">
                                            <span class="message center">No Active Tasks Currently..</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>

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
