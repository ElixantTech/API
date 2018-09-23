<?php
namespace Data;

/**
 * An open source application development framework for PHP
 *
 * This content is released under the MIT License (MIT)
 *
 * Copyright (c) 2018 Elixant Technology Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @category   Development
 * @package    Elixant/Platform
 * @author     Zander Schmautz <zander.schmautz@elixant.ca>
 * @copyright  2018 Elixant Technology Ltd.
 * @license    https://opensource.org/licenses/MIT	MIT License
 * @version    1.0.0-dev
 */
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Traits\HasUUID;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable;
    use HasApiTokens;
    use HasUUID;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'owner_id',
        'status',
        'user_name',
        'nickname',
        'password',
        'prefix_name',
        'first_name',
        'middle_name',
        'last_name',
        'suffix_name',
        'primary_email',
        'secondary_email',
        'work_email',
        'primary_phone',
        'secondary_phone',
        'mobile_phone',
        'street_address',
        'city',
        'province',
        'postal_code',
        'country_code',
        'language',
        'locale',
        'timezone',
        'stripe_token',
        'ip_address',
        'user_type',
        'employee_number',
        'company_name',
        'company_division',
        'company_department',
        'notes',
        'remember_token'
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
     * The Owner/Company Relation
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Company|Company[]
     */
    public function owner()
    {
        return $this->belongsTo(Company::class, 'owner_id');
    }
}