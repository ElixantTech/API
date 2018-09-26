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
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Company extends Model
{
    use Notifiable,
        HasApiTokens;
    
    protected $table = 'companies';
}
