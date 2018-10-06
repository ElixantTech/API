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
trait RespondsWithJSON
{
    public function output($data = [], $status = 200, $messge = 'OK')
    {
        $json = [
            'status'    =>  $status,
            'message'   =>  $messge,
            'data'      =>  $data,
            'timestamp' =>  time(),
            'ipaddress' =>  request()->ip()
        ];
        
        return response()
            ->json($json)
            ->withHeaders([
                'Access-Control-Allow-Origin'   =>  '*',
                'Access-Control-Allow-Methods'  =>  'GET, POST, PUT, DELETE, OPTIONS'
            ]);
    }
}
