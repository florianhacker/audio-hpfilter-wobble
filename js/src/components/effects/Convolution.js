/**
 * @author Florian Hacker / http://twitter.com/florianhacker
 */


audio.Convolution = function(context)
{
	
}

audio.Convolution.prototype.init = function( context, output )
{		
	this.effectIDX = 0;
	
	this.context = context;
	
	this.convolver = context.createConvolver();	

	this.gainDry = context.createGainNode(); 
	this.gainWet = context.createGainNode();
	this.inputGain = context.createGainNode();
	this.inputGain.connect( this.gainDry );		
	this.inputGain.connect( this.convolver );
	this.bufferSource = context.createBufferSource();

	this.dryWetMix(1, 2);

	this.convolver.connect( this.gainWet );
	this.output = output;
}

audio.Convolution.prototype.connect = function(output)
{
	this.gainWet.connect( output );
	this.gainDry.connect( output );
}
	
audio.Convolution.prototype.dryWetMix = function(dry, wet)
{
	this.gainDry.gain.value = dry;
    this.gainWet.gain.value = wet;
}