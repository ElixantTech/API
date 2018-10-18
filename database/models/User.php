<?php
namespace Data;

/**
 * Elixant Platform
 *
 * A Closed-Source, Proprietary Business Platform featuring unified
 * solutions by Elixant.
 *
 * @category   Development
 * @package    Elixant/Core
 * @author     Zander Schmautz <zander.schmautz@elixant.ca>
 * @copyright  2018 Elixant Technology Ltd.
 * @version    1.0.0-dev
 */
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Cashier\Billable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable,
        Billable,
        HasApiTokens;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'company_id',
        'status',
        'email',
        'phone',
        'first_name',
        'last_name',
        'street_address',
        'city',
        'province',
        'postal_code',
        'country_code',
        'language',
        'locale',
        'timezone',
        'signup_ip',
        'last_login',
        'email_verified_at',
        'password',
    ];
    
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'company_id'
    ];
    
    /**
     * All of the relationships to be touched.
     *
     * @var array
     */
    protected $touches = ['company'];
    
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'created_at' => 'datetime:d/m/y H:i:s',
        'updated_at' => 'datetime:d/m/y H:i:s',
        'deleted_at' => 'datetime:d/m/y H:i:s'
    ];
    
    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }
    
    /**
     * Whether or not the User has a configured company.
     *
     * @return bool
     */
    public function hasCompany()
    {
        return (bool) $this->company;
    }
}
