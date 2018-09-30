@extends('layouts.base')

@section('template')
    <section class="body-sign" id="app" style="max-width: 950px !important;">
        <div class="center-sign">
            <a class="logo float-left">
                <img src="{{ asset('img/logo.png') }}" height="54"/>
            </a>

            <section class="card-sign form-wizard mt-3" id="signup">
                <div class="tabs">
                    <ul class="nav nav-tabs tabs-primary justify-content-end wizard-steps">
                        <li class="nav-item active">
                            <a href="#signup-account" data-toggle="tab" class="nav-link text-center">
                                <span class="badge badge-primary">1</span>
                                Account
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#signup-profile" data-toggle="tab" class="nav-link text-center">
                                <span class="badge badge-primary">2</span>
                                Profile
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#signup-company" data-toggle="tab" class="nav-link text-center">
                                <span class="badge badge-primary">3</span>
                                Company
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#signup-billing" data-toggle="tab" class="nav-link text-center">
                                <span class="badge badge-primary">4</span>
                                Billing
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#w2-confirm" data-toggle="tab" class="nav-link text-center">
                                <span class="badge badge-primary">5</span>
                                Confirm
                            </a>
                        </li>
                    </ul>
                    {{ Form::open(['method' => 'post']) }}
                        <div class="tab-content">
                            <div id="w2-account" class="tab-pane p-3 active">
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        {{ Form::label('first_name', 'First Name', ['class' => 'col_form_label']) }}
                                        {{ Form::text('first_name', old('first_name'), ['class' => 'form-control form-control-lg', 'required' => 'required']) }}
                                    </div>
                                    <div class="col-md-6">
                                        {{ Form::label('last_name', 'Last Name', ['class' => 'col_form_label']) }}
                                        {{ Form::text('last_name', old('last_name'), ['class' => 'form-control form-control-lg', 'required' => 'required']) }}
                                    </div>
                                </div>

                                <div class="clearfix"></div>

                                <div class="form-group row">
                                    <div class="col-md-8">
                                        {{ Form::label('email', 'E-Mail Address', ['class' => 'col_form_label']) }}
                                        {{ Form::email('email', old('email'), ['class' => 'form-control form-control-lg', 'required' => 'required']) }}
                                    </div>
                                    <div class="col-md-4">
                                        {{ Form::label('phone', 'Phone Number', ['class' => 'col_form_label']) }}
                                        {{ Form::tel('phone', old('phone'), ['class' => 'form-control form-control-lg', 'required' => 'required']) }}
                                    </div>
                                </div>

                                <div class="clearfix"></div>

                                <div class="form-group row">
                                    <div class="col-md-6">
                                        {{ Form::label('password', 'Password', ['class' => 'col_form_label']) }}
                                        {{ Form::password('password', '', ['class' => 'form-control form-control-lg', 'required' => 'required']) }}
                                    </div>
                                    <div class="col-md-6">
                                        {{ Form::label('password_confirmation', 'Confirm Password', ['class' => 'col_form_label']) }}
                                        {{ Form::password('password_confirmation', '', ['class' => 'form-control form-control-lg', 'required' => 'required']) }}
                                    </div>
                                </div>
                            </div>


                            <div id="signup-profile" class="tab-pane p-3">
                                <div class="form-group row">
                                    <label class="col-sm-4 control-label text-sm-right pt-1" for="w2-first-name">First Name</label>
                                    <div class="col-sm-8">
                                        <input class="form-control" name="first-name" id="w2-first-name" required="" type="text">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-4 control-label text-sm-right pt-1" for="w2-last-name">Last Name</label>
                                    <div class="col-sm-8">
                                        <input class="form-control" name="last-name" id="w2-last-name" required="" type="text">
                                    </div>
                                </div>
                            </div>

                            <div id="signup-company" class="tab-pane p-3"></div>


                            <div id="signup-billing" class="tab-pane p-3"></div>


                            <div id="w2-confirm" class="tab-pane p-3">
                                <div class="form-group row">
                                    <label class="col-sm-4 control-label text-sm-right pt-1" for="w2-email">Email</label>
                                    <div class="col-sm-8">
                                        <input class="form-control" name="email" id="w2-email" required="" type="text">
                                    </div>
                                </div>


                                <div class="form-group row">
                                    <div class="col-sm-2"></div>
                                    <div class="col-sm-10">
                                        <div class="checkbox-custom">
                                            <input name="terms" id="w2-terms" required="" type="checkbox">
                                            <label for="w2-terms">I agree to the terms of service</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {{ Form::close() }}
                </div>
                <div class="card-footer">
                    <ul class="pager">
                        <li class="previous disabled">
                            <a><i class="fas fa-angle-left"></i> Previous</a>
                        </li>
                        <li class="finish hidden float-right">
                            <a>Finish</a>
                        </li>
                        <li class="next">
                            <a>Next <i class="fas fa-angle-right"></i></a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </section>
@endsection
