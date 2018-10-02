<?php
namespace App\Platform\Communication\Telnyx\Contracts;

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
use App\Platform\Communication\Telnyx\Client;
use GuzzleHttp\Client as HTTPClient;

interface ClientContract
{
    const API_BASE_ENDPOINT         = 'https://api.telnyx.com/';
    
    /**
     * Client constructor.
     *
     * The Constructor is used to execute any code that may need to be
     * executed upon loading the Class initially.
     *
     * @param string          $auth_token
     */
    public function __construct($auth_token);
}
