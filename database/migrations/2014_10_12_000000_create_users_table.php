<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('company_id');
    
            $table->enum('status', ['active', 'inactive', 'pending', 'rejected', 'disabled', 'terminated'])
                ->default('pending');
            
            $table->string('email')->unique();
            $table->string('phone', '11');
    
            $table->string('first_name')->required();
            $table->string('last_name')->required();
    
            $table->string('street_address');
            $table->string('city');
            $table->string('province');
            $table->string('postal_code');
            $table->string('country_code');
    
            $table->string('language')->default('en');
            $table->string('locale')->default('en-CA');
            $table->string('timezone')->default('America/Vancouver');
            
            $table->ipAddress('signup_ip')->nullable();
            $table->timestamp('last_login')->nullable();
            
            
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            
            $table->rememberToken();
    
            $table->string('stripe_id')->nullable();
            $table->string('card_brand')->nullable();
            $table->string('card_last_four')->nullable();
            $table->timestamp('trial_ends_at')->nullable();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
