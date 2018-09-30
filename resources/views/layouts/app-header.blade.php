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

        <HeaderSearchForm></HeaderSearchForm>

        <span class="separator"></span>

        @include('layouts.app-header-notifications')

        <span class="separator"></span>

        @include('layouts.app-header-userbox')

    </div>
</header>
