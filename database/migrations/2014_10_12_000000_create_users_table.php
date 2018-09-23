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
            $table->uuid('id');
            
            $table->enum('status', ['active', 'inactive', 'pending', 'rejected', 'disabled', 'terminated'])
                ->default('pending');
            
            $table->string('email')->unique();
            
            $table->string('password');
            
            $table->string('first_name')->required();
            $table->string('last_name')->required();
            
            $table->string('primary_phone', 12)->nullable();
            $table->string('secondary_phone', 12)->nullable();
            $table->string('mobile_phone', 12)->nullable();
            
            $table->string('street_address');
            $table->string('city');
            $table->string('province');
            $table->string('postal_code');
            $table->string('country_code');
            
            $table->string('language')->default('en');
            $table->string('locale')->default('en-CA');
            $table->string('timezone')->default('America/Vancouver');
            
            $table->rememberToken();
            
            $table->string('stripe_token')->nullable();
            $table->ipAddress('ip_address')->nullable();
            
            $table->text('notes')->nullable();
            
            $table->timestamps();
            
            $table->primary('id');
            $table->index('email');
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
