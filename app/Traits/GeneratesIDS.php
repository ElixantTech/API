<?php
namespace App\Traits;

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
trait GeneratesIDS
{
    protected static function __generateID()
    {
        return 'company.' . substr(base_convert(sha1(uniqid(mt_rand())), 16, 36), 0, 16);
    }
}
