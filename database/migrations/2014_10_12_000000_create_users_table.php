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
            
            $table->string('first_name');
            $table->string('last_name');
            
            $table->string('email')->unique();
            
            $table->string('password');
            
            $table->string('address');
            $table->string('city');
            $table->string('province');
            $table->string('postal_code');
            $table->string('country_code');
            
            $table->string('phone')->nullable();
            $table->string('cellphone')->nullable();
            
            $table->rememberToken();
            
            $table->enum('status', [
                'pending',
                'verified',
                'blacklisted'
            ]);
            
            $table->string('stripe_token')->nullable();
            
            $table->ipAddress('ip_address')->nullable();
            
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