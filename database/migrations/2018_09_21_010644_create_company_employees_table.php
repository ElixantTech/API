<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompanyEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_employees', function (Blueprint $table) {
            $table->increments('id');
            $table->uuid('company_id');
            $table->uuid('user_id');
            
            $table->unsignedInteger('employee_number');
            $table->unsignedInteger('position_id');
            
            $table->enum('status', ['Active', 'Leave', 'Quit', 'Layoff', 'Suspended', 'Terminated', 'AWOL'])->default('Active');
            
            $table->char('extension', 4)->nullable();
            $table->unsignedInteger('direct_number_id')->nullable();
            
            $table->enum('type', ['Part Time', 'Full Time', 'Temporary', 'Seasonal']);
            $table->enum('pay_method', ['Cheque', 'Direct Deposit', 'E-Transfer']);
            $table->enum('pay_type', ['Commission', 'Salary', 'Hourly'])->default('hourly');
            $table->enum('pay_frequency', ['Daily', 'Weekly', 'Bi-Weekly', 'Semi-Monthly', 'Monthly']);
            $table->float('pay_rate')->default('12.45');
            
            $table->float('pay_ytd')->default('0.00');
            
            $table->boolean('pay_vacation_accrue')->default(true);
            $table->unsignedSmallInteger('pay_vacation_percent')->default(4);
            $table->float('pay_vacation_accrued')->default('0.00');
            $table->float('pay_vacation_ytd')->default('0.00');
            
            $table->string('work_email')->nullable();
            
            $table->string('tax_id')->nullable();
            
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
        Schema::dropIfExists('company_employees');
    }
}
