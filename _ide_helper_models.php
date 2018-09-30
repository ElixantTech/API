<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace Data{
/**
 * Elixant Platform
 * 
 * A Closed-Source, Proprietary Business Platform featuring unified
 * solutions by Elixant.
 *
 * @category Development
 * @package Elixant/Core
 * @author Zander Schmautz <zander.schmautz@elixant.ca>
 * @copyright 2018 Elixant Technology Ltd.
 * @version 1.0.0-dev
 * @property string $id
 * @property string $status
 * @property string $name
 * @property string $legal_name
 * @property string $company_type
 * @property string|null $jurisdiction
 * @property string|null $business_number
 * @property string|null $federal_tax_id
 * @property string|null $provincial_tax_id
 * @property string|null $payroll_tax_id
 * @property string $wcb_id
 * @property string $street_address
 * @property string $city
 * @property string $province
 * @property string $postal_code
 * @property string $country_code
 * @property string $language
 * @property string $locale
 * @property string $timezone
 * @property float $balance
 * @property mixed|null $created_at
 * @property mixed|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Passport\Client[] $clients
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Passport\Token[] $tokens
 * @property-read \Illuminate\Database\Eloquent\Collection|\Data\User[] $users
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereBalance($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereBusinessNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereCompanyType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereCountryCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereFederalTaxId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereJurisdiction($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereLanguage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereLegalName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereLocale($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company wherePayrollTaxId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company wherePostalCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereProvince($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereProvincialTaxId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereStreetAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereTimezone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\Company whereWcbId($value)
 */
	class Company extends \Eloquent {}
}

namespace Data{
/**
 * Elixant Platform
 * 
 * A Closed-Source, Proprietary Business Platform featuring unified
 * solutions by Elixant.
 *
 * @category Development
 * @package Elixant/Core
 * @author Zander Schmautz <zander.schmautz@elixant.ca>
 * @copyright 2018 Elixant Technology Ltd.
 * @version 1.0.0-dev
 * @property int $id
 * @property string $company_id
 * @property string $status
 * @property string $email
 * @property string $phone
 * @property string $first_name
 * @property string $last_name
 * @property string $street_address
 * @property string $city
 * @property string $province
 * @property string $postal_code
 * @property string $country_code
 * @property string $language
 * @property string $locale
 * @property string $timezone
 * @property string|null $signup_ip
 * @property string|null $last_login
 * @property string|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property mixed|null $created_at
 * @property mixed|null $updated_at
 * @property-read \Data\Company $company
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereCompanyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereCountryCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereLanguage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereLastLogin($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereLocale($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User wherePostalCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereProvince($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereSignupIp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereStreetAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereTimezone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Data\User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

