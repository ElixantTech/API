<?php
namespace App\Observers;

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

use App\Traits\GeneratesIDS;
use Data\Company;

final class CompanyObserver
{
    use GeneratesIDS;
    
    /**
     * Generate a Unique & Secure ID Token.
     *
     * @param Company $company
     *
     * @return null
     */
    public function creating(Company $company)
    {
        $company->id = static::__generateID();
        
        return null;
    }
}
