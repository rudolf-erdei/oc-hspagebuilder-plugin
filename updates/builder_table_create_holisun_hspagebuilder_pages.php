<?php namespace Holisun\HSPageBuilder\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateHolisunHspagebuilderPages extends Migration
{
    public function up()
    {
        Schema::create('holisun_hspagebuilder_pages', function($table) {
            $table->increments('id')->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->string('title');
            $table->string('slug')->nullable()->unique();
            $table->longText('html')->nullable();
            $table->longText('css')->nullable();
            $table->longText('builder_state')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('holisun_hspagebuilder_pages');
    }
}
