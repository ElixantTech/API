<?php
namespace App\Models;

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/**
 * This file is part of Elixant Platform.
 *
 * Please refer to the LICENSE file that was included during download for more information
 * about the type of licensing that is included with this software.
 *
 * @category Platform
 * @package Platform
 * @author Zander Schmautz <zander.schmautz@elixant.ca>
 * @copyright 2018 Elixant Technology Ltd.
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @link https://www.elixant.ca
 */
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Arr;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'address',
        'city',
        'province',
        'postal_code',
        'country_code',
        'phone',
        'cellphone',
        'status',
        'ip_address'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token'
    ];

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
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}
