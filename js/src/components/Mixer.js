/**
 * @author Florian Hacker / http://twitter.com/florianhacker
 */


audio.Mixer = function()
{
	var numChannels = 8;
	
	function Mixer( context )
	{
		this.context = context;
		this.channels = [];
		
		this.init();
	}
	
	Mixer.prototype.init = function()
	{
		this.initChannels();
	}
		
	Mixer.prototype.initChannels = function()
	{
		this.masterOut = this.context.createGainNode();
		
		for(var i = 0; i<numChannels; i++)
		{
			var gain = this.context.createGainNode();
			gain.connect( this.masterOut );
		
			this.channels[i] = gain;
		}
		
		this.channels[numChannels] = this.masterOut; 
	}
	
	Mixer.prototype.changeVolume = function(channelIdx, volume)
	{
		this.channels[channelIdx].gain.value = volume;
	}
	
	Mixer.prototype.masterVolume = function(volume)
	{
		this.channels[numChannels].gain.value = volume;
	}
	
	Mixer.prototype.connectIO = function(input, output)
	{
		//no output
		this.masterOut.connect( output );
	}
	
	return Mixer;
	
}();