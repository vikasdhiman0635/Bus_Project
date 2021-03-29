package com.example.user.ServiceImple;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.user.Model.BusData;
import com.example.user.Repo.BusRepo;
import com.example.user.Response.BusOwnerResponse;
import com.example.user.Response.BusResponse;
import com.example.user.Response.BusbyidResponse;
import com.example.user.Response.UpdateBusResponse;
import com.example.user.Response.disablebusResponse;
import com.example.user.Response.getbusByBusnumberREsponse;
import com.example.user.Service.busservice;

@Service
public class BusServiceImple implements busservice
{

    @Autowired
    BusRepo repo;

    @Override
    public ResponseEntity<?> savebusdaa(BusData bus)
    {

        BusResponse res=new BusResponse();

        ModelMapper mapper = new ModelMapper();
        BusData buss = mapper.map(bus, BusData.class);

        if(!repo.existsByBusnumber(bus.getBusnumber()))
        {
            res.setBus(repo.save(buss));
            if(res.getBus()!=null)
            {
                res.setMessage("Bus save successful");
                return ResponseEntity.ok(res);
            }
            else
            {
                res.setMessage("Bus is not save regarding any issue");
                return ResponseEntity.ok(res);
            }
        }
        else
        {
        	BusData bs=new BusData();
        	bs=repo.findAllById(bus.getId());
        	if(bus.getBusdelete()==bs.getBusdelete())
        	{
        		res.setMessage("This bus us already exist");
                return ResponseEntity.ok(res);	
        	}
        	else
        	{
        		res.setBus(repo.save(bus));
        		res.setMessage("This bus us already exist");
                return ResponseEntity.ok(res);
        	}
        	
            
        }
    }

    @Override
    public ResponseEntity<List<BusData>> getdatabybusnumber(String busnumber)
    {
        List<BusData> bs=repo.findAllByBusnumber(busnumber);
        return ResponseEntity.ok(bs);
    }

    @Override
    public ResponseEntity<?> getdatabyowner(String useremail)
    {
        BusOwnerResponse res=new BusOwnerResponse();

        if(repo.existsByUseremail(useremail))
        {
            List<BusData> bus=repo.findAllByUseremail(useremail);
            res.setBus(bus);
            res.setSize(bus.size());
//            System.out.println(bus);
            if(res.getSize()!=0)
            {
            	res.setMessage("Operation succesful");
            	res.setCheck(true);
                return ResponseEntity.ok(res);
            }
            else
            {
            	res.setMessage("This user bus is not exist");
            	res.setCheck(false);
                return ResponseEntity.ok(res);
            }
        }
        else
        {
            res.setMessage("This user is not exist");
            res.setCheck(false);
            return ResponseEntity.ok(res);
        }
    }

	@Override
	public ResponseEntity<?> getdatabybusnumbers(String busnumber) 
	{
		getbusByBusnumberREsponse res=new getbusByBusnumberREsponse();
		if(repo.existsByBusnumber(busnumber))
		{
			res.setCheck(true);
			res.setMessage("exist");
			return ResponseEntity.ok(res);
		}
		else
		{
			res.setCheck(false);
			res.setMessage("Not exist");
			return ResponseEntity.ok(res);
		}
	}

	@Override
	public ResponseEntity<?> updatebybusnumber(BusData bus) 
	{
		UpdateBusResponse res=new UpdateBusResponse();
		if(!repo.existsByBusnumber(bus.getBusnumber()))
		{
			BusData buss=repo.save(bus);
			if(buss!=null)
			{
				res.setBus(buss);
				res.setMessage("Update bus");
				return ResponseEntity.ok(res);
			}
			else
			{
				res.setBus(buss);
				res.setMessage("Bus is not update");
				return ResponseEntity.ok(res);
			}
		}
		else
		{
			repo.deleteById(bus.getId());
			if(repo.existsById(bus.getId()))
			{
				repo.deleteById(bus.getId());
				BusData buss=repo.save(bus);
				if(buss!=null)
				{
					res.setBus(buss);
					res.setMessage("Update bus");
					return ResponseEntity.ok(res);
				}
				else
				{
					res.setBus(buss);
					res.setMessage("Bus is not update");
					return ResponseEntity.ok(res);
				}
			}
			else
			{
				BusData buss=repo.save(bus);
				if(buss!=null)
				{
					res.setBus(buss);
					res.setMessage("Update bus");
					return ResponseEntity.ok(res);
				}
				else
				{
					res.setBus(buss);
					res.setMessage("Bus is not update");
					return ResponseEntity.ok(res);
				}
			}
		}
	}

    @Override
    public ResponseEntity<?> getbusbyid(long id)
    {
        BusbyidResponse res=new BusbyidResponse();
        if(repo.existsById(id))
        {
            BusData bus=repo.findAllById(id);
            if (bus!=null)
            {
                res.setMessage("Operation successful");
                res.setBus(bus);
                return ResponseEntity.ok(res);
            }
            else
            {
                res.setMessage("Operation fail because the data exist but not find");
                res.setBus(bus);
                return ResponseEntity.ok(res);
            }
        }
        else
        {
            res.setMessage("Data is not exist");
            return ResponseEntity.ok(res);
        }
    }

	@Override
	public String deletebus(long id) 
	{
		repo.deleteById(id);
		return "Bus delete";
	}

	@Override
	public ResponseEntity<?> disablebua(BusData bus)
	{		
		disablebusResponse res=new disablebusResponse();
		if(repo.existsById(bus.getId()))
		{
			repo.deleteById(bus.getId());
			BusData bssss=repo.save(bus);
			res.setMessage("Update Successful");
			res.setBus(bssss);
			return ResponseEntity.ok(res);
		}
		else
		{
			res.setMessage("Bus is not exist");
			return ResponseEntity.ok(res);
		}
	}

	@Override
	public ResponseEntity<?> getdatabybusnumberonlyonedata(String busnumber) {
		// TODO Auto-generated method stub
		BusData bus=repo.findByBusnumber(busnumber);
		return ResponseEntity.ok(bus);
	}

}