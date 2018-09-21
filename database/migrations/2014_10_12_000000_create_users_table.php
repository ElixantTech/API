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
            $table->uuid('owner_id')->nullable();
            
            $table->enum('status', ['active', 'inactive', 'pending', 'rejected', 'disabled', 'terminated'])
                ->default('pending');
            
            $table->string('user_name')->nullable();
            $table->string('nickname')->nullable()->unique();
            
            $table->string('password');
            
            $table->string('prefix_name')->nullable();
            $table->string('first_name')->required();
            $table->string('middle_name')->default('');
            $table->string('last_name')->required();
            $table->string('suffix_name')->nullable();
            
            $table->string('primary_email')->unique();
            $table->string('secondary_email')->nullable();
            $table->string('work_email')->nullable();
            
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
            
            // Optional, Customizable Fields.
            $table->string('user_type')->nullable();
            $table->string('employee_number')->nullable();
            $table->string('company_name')->nullable();
            $table->string('company_division')->nullable();
            $table->string('company_department')->nullable();
            
            $table->text('notes')->nullable();
            
            $table->timestamps();
            
            $table->primary('id');
            $table->index('user_name');
            $table->index('primary_email');
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
