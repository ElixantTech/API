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

use App\Observers\CompanyObserver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Company extends Model
{
    use Notifiable,
        HasApiTokens;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'status',
        'name',
        'legal_name',
        'company_type',
        'jurisdiction',
        'business_number',
        'federal_tax_id',
        'provincial_tax_id',
        'payroll_tax_id',
        'wcb_id',
        'street_address',
        'city',
        'province',
        'postal_code',
        'country_code',
        'language',
        'locale',
        'timezone',
        'balance'
    ];
    
    /**
     * Define which table to access in case the
     * model is unable to automatically determine it.
     *
     * @var string
     */
    protected $table = 'companies';
    
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
    
    /**
     * Make it known that the ID is not incrementing.
     *
     * @var bool
     */
    public $incrementing = false;
    
    /**
     * Override the primary key type.
     *
     * @var string $keyType
     */
    protected $keyType = 'string';
    
    /**
     * Add CompanyObserver to the boot method of the current model.
     */
    public static function boot()
    {
        parent::boot();
        self::observe(CompanyObserver::class);
    }
    
    /**
     * The User Relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany|User[]
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
