<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->uuid('id');
            
            $table->enum('status', ['active', 'inactive', 'pending', 'rejected', 'disabled', 'terminated'])
            ->default('pending');
            
            $table->string('name');
            $table->string('legal_name');
            
            $table->enum('company_type', ['Sole Proprietor', 'General Partnership', 'Corporation']);
            $table->string('jurisdiction')->nullable();
            
            $table->string('business_number')->nullable();
            $table->string('federal_tax_id')->nullable();
            $table->string('provincial_tax_id')->nullable();
            $table->string('payroll_tax_id')->nullable();
            $table->string('wcb_id');
            
            $table->string('street_address');
            $table->string('city');
            $table->string('province');
            $table->string('postal_code');
            $table->string('country_code');
            
            $table->string('language')->default('en');
            $table->string('locale')->default('en-CA');
            $table->string('timezone')->default('America/Vancouver');
            
            $table->string('public_key');
            $table->string('private_key');
            
            $table->float('credit')->default('0.00');
            
            $table->timestamps();
            
            $table->primary('id');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
}
