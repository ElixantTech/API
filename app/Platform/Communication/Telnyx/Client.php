<?php
namespace App\Platform\Communication\Telnyx;

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

use App\Platform\Communication\Telnyx\API\Account;
use App\Platform\Communication\Telnyx\Contracts\ClientContract;
use GuzzleHttp\Client as HTTPClient;

class Client extends HTTPClient implements ClientContract
{
    /**
     * The API Endpoint Client (GuzzleHttp)
     *
     * @var HTTPClient
     */
    protected $api;
    
    /**
     * The API Authentication Token(s)
     *
     * @var string
     */
    protected $auth_token = '';
    
    /**
     * The API Instances
     *
     * @var Account[]
     */
    protected $instances = [];
    
    /**
     * Client constructor.
     *
     * The Constructor is used to execute any code that may need to be
     * executed upon loading the Class initially.
     *
     * @param string          $auth_token
     */
    public function __construct($auth_token)
    {
        $this->auth_token = $auth_token;
        
        parent::__construct([
            'allow_redirects' => false,
            'verify' => false
        ]);
    }
}
