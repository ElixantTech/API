<?php
namespace App\Http\Controllers\API;

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

use Data\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\RespondsWithJSON;

class UserController extends Controller
{
    use RespondsWithJSON;
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (filter_var($id, FILTER_VALIDATE_EMAIL))
        {
        
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    
    public function verifyEmailExists(Request $request)
    {
        if (! $request->has('email'))
        {
            return $this->output([
                'email'     =>  null,
                'exists'    =>  false
            ]);
        }
        
        $user = User::whereEmail($email = $request->post('email'))->first();
        
        if (! $user->exists)
        {
            return $this->output([
                'email'     =>  $email,
                'exists'    =>  false
            ]);
        }
    
        return $this->output([
            'email'     =>  $email,
            'exists'    =>  true,
            'user_id'   =>  $user->id
        ]);
    }
}
