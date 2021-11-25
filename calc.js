var Fcalc = document.calc;
var Currents = 0;
var FlagNewNum = false;
var PendingOp = "";


function NumPressed (Num) 
{
		if (FlagNewNum) 
		{
			Fcalc.ReadOut.value = Num;
			FlagNewNum = false;
		}	
		else 
		{
			if (Fcalc.ReadOut.value == "0")
				Fcalc.ReadOut.value = Num;
			else
				Fcalc.ReadOut.value += Num;
		}
}
	
function Operation (Op) 
{
		var Readout = Fcalc.ReadOut.value;
		if (FlagNewNum && PendingOp != "=")
		{
			Fcalc.ReadOut.value = Currents;
		}
		else
		{
			FlagNewNum = true;
			if ( '+' == PendingOp )
				Currents += parseFloat(Readout);
			else if ( '-' == PendingOp )
				Currents -= parseFloat(Readout);
			else if ( '/' == PendingOp )
				Currents /= parseFloat(Readout);
			else if ( '*' == PendingOp )
				Currents *= parseFloat(Readout);
			else
				Currents = parseFloat(Readout);
			Fcalc.ReadOut.value = Currents;
			PendingOp = Op;
		}
}
	
function Decimal () 
{
		var curReadOut = Fcalc.ReadOut.value;
		if (FlagNewNum) 
		{
			curReadOut = "0.";
			FlagNewNum = false;
		}
		else
		{
			if (curReadOut.indexOf(".") == -1)
				curReadOut += ".";
		}
		Fcalc.ReadOut.value = curReadOut;
}
	
function ClearEntry () 
{
		Fcalc.ReadOut.value = "0";
		FlagNewNum = true;
}
	
function Clear () 
{
		Currents = 0;
		PendingOp = "";
		ClearEntry();

}

function Neg () 
{
		Fcalc.ReadOut.value = 
		parseFloat(Fcalc.ReadOut.value) * -1;
}
	

function Percent () 
{
		Fcalc.ReadOut.value = 
			(parseFloat(Fcalc.ReadOut.value) / 100) * 
			parseFloat(Currents);
}
