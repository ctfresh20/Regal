import Accordion from 'react-bootstrap/Accordion';
import React from "react";
import {Link} from "react-router-dom";
function Accord() {
    return (
        <Accordion >
            <Accordion.Item eventKey="0">
                <Accordion.Header><Link to="/" style={{textDecoration:"none", color:"black"}}> Home </Link></Accordion.Header>

            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header > <Link to="/Departments" style={{textDecoration:"none", color:"black"}}>Department</Link></Accordion.Header>
                <Accordion.Body>
                    <Accordion >
                        <Accordion.Item eventKey="1.1">
                            <Accordion.Header><Link to="/Artificial"> Artificial Flowers</Link></Accordion.Header>
                            <Accordion.Body>
                                Artificial
                            </Accordion.Body>
                            <Accordion.Body>
                                Bouquets
                            </Accordion.Body>
                            <Accordion.Body>
                                Garland Hanging
                            </Accordion.Body>
                            <Accordion.Body>
                                Flowers
                            </Accordion.Body>
                            <Accordion.Body>
                               Single Stems
                            </Accordion.Body>
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="1.2">
                            <Accordion.Header><Link to="/Bathwares">Bathroom</Link></Accordion.Header>
                            <Accordion.Body>
                               Bath Mats
                            </Accordion.Body>
                            <Accordion.Body>
                                Bathroom Accessories
                            </Accordion.Body>
                            <Accordion.Body>
                              Bathroom Scales
                            </Accordion.Body>
                            <Accordion.Body>
                               Mirrors
                            </Accordion.Body>
                           
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="1.5">
                            <Accordion.Header><Link to="/Battery"> Batteries</Link></Accordion.Header>
                            
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="1.3">
                            <Accordion.Header>Candles</Accordion.Header>
                            <Accordion.Body>
                               Alter & Pillar Candles
                            </Accordion.Body>
                            <Accordion.Body>
                               Battery Operated Candles
                            </Accordion.Body>
                            <Accordion.Body>
                               Candle Jars
                            </Accordion.Body>
                            <Accordion.Body>
                              Candle Plates & Wood
                            </Accordion.Body>
                           
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="1.4">
                            <Accordion.Header>China </Accordion.Header>
                            <Accordion.Body>
                               Cookware
                            </Accordion.Body>
                            <Accordion.Body>
                               Crockery
                            </Accordion.Body>
                            <Accordion.Body>
                               Dinnersets
                            </Accordion.Body>
                            <Accordion.Body>
                                Flowers
                            </Accordion.Body>
                            <Accordion.Body>
                               Single Stems
                            </Accordion.Body>
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="1.6">
                            <Accordion.Header> Christmas</Accordion.Header>
                            <Accordion.Body>
                                Christmas Candle & Gifts
                            </Accordion.Body>
                            <Accordion.Body>
                                Christmas Memorial
                            </Accordion.Body>
                            <Accordion.Body>
                                Christmas Pet
                            </Accordion.Body>
                            <Accordion.Body>
                                Crackers
                            </Accordion.Body>
                           
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="1.7">
                            <Accordion.Header> Cleaning Materials</Accordion.Header>
                            <Accordion.Body>
                                Brushware
                            </Accordion.Body>
                            <Accordion.Body>
                               Clothes & Duster
                            </Accordion.Body>
                            <Accordion.Body>
                                Glovers
                            </Accordion.Body>
                            <Accordion.Body>
                               Mops Squegges
                            </Accordion.Body>
                            
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="1.8">
                            <Accordion.Header> Disposable & Paper Bags</Accordion.Header>
                            <Accordion.Body>
                                Bin Bag Carrier
                            </Accordion.Body>
                            <Accordion.Body>
                               Paper Bag
                            </Accordion.Body>
                            <Accordion.Body>
                               Disposable Tableware
                            </Accordion.Body>
                           
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="1.9">
                            <Accordion.Header>Diy</Accordion.Header>
                            <Accordion.Body>
                                Akzonobel
                            </Accordion.Body>
                            <Accordion.Body>
                                Amtech Tools
                            </Accordion.Body>
                            <Accordion.Body>
                               Antiquax
                            </Accordion.Body>
                            <Accordion.Body>
                                Axus Decors
                            </Accordion.Body>
                       
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="2.0">
                            <Accordion.Header>Electrical</Accordion.Header>
                            <Accordion.Body>
                                Clocks
                            </Accordion.Body>
                            <Accordion.Body>
                                Doorbells
                            </Accordion.Body>
                            <Accordion.Body>
                               Alarm Clocks
                            </Accordion.Body>
                            <Accordion.Body>
                               Dummy Cameras
                            </Accordion.Body>
                            <Accordion.Body>
                              Speakers
                            </Accordion.Body>
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="2.1">
                            <Accordion.Header> Frames & Mirrors</Accordion.Header>
                            <Accordion.Body>
                              Clip Frames
                            </Accordion.Body>
                            <Accordion.Body>
                               Mirrors
                            </Accordion.Body>
                            <Accordion.Body>
                               Multi Frames
                            </Accordion.Body>
                            <Accordion.Body>
                              Photo Albums
                            </Accordion.Body>
                        
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="2.2">
                            <Accordion.Header> Grdening</Accordion.Header>
                            <Accordion.Body>
                                Bbq 
                            </Accordion.Body>
                            <Accordion.Body>
                             Birdcare
                            </Accordion.Body>
                            <Accordion.Body>
                               Camping
                            </Accordion.Body>
                            <Accordion.Body>
                                Fertilisers 
                            </Accordion.Body>
                            <Accordion.Body>
                             Chemicals
                            </Accordion.Body>
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="2.3">
                            <Accordion.Header> Giftware</Accordion.Header>
                            <Accordion.Body>
                              Buddhas Elephants
                            </Accordion.Body>
                            <Accordion.Body>
                                Pineapples
                            </Accordion.Body>
                            <Accordion.Body>
                               Charger Plates
                            </Accordion.Body>
                            <Accordion.Body>
                               Toys for Ladies
                            </Accordion.Body>
                            <Accordion.Body>
                               Toys For Boys
                            </Accordion.Body>
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="2.4">
                            <Accordion.Header> Glassware</Accordion.Header>
                            <Accordion.Body>
                               Cakestands
                            </Accordion.Body>
                            <Accordion.Body>
                                Crystals
                            </Accordion.Body>
                            <Accordion.Body>
                                Drinking Glass
                            </Accordion.Body>
                            <Accordion.Body>
                              Glass Decorative & Gifts
                            </Accordion.Body>
                           
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="2.5">
                            <Accordion.Header> Household</Accordion.Header>
                            <Accordion.Body>
                               Air freshners
                            </Accordion.Body>
                            <Accordion.Body>
                                Bathroom Cleaners
                            </Accordion.Body>
                            <Accordion.Body>
                               Bleach
                            </Accordion.Body>
                            <Accordion.Body>
                                Car care
                            </Accordion.Body>
                           
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="2.6">
                            <Accordion.Header> Hardware</Accordion.Header>
                            <Accordion.Body>
                               Furniture
                            </Accordion.Body>
                            <Accordion.Body>
                                Mats & Rugs
                            </Accordion.Body>
                            <Accordion.Body>
                              Metal Buckets
                            </Accordion.Body>
                            <Accordion.Body>
                              Bins
                            </Accordion.Body>
                            
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="2.7">
                            <Accordion.Header> Incense Oils</Accordion.Header>
                            <Accordion.Body>
                                Diffusers
                            </Accordion.Body>
                            <Accordion.Body>
                               Fragrance Oils & Burner
                            </Accordion.Body>
                            <Accordion.Body>
                               Incense Cones & Holders
                            </Accordion.Body>
                            <Accordion.Body>
                              Incense Sticks & Holder
                            </Accordion.Body>
                          
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="2.9">
                            <Accordion.Header> Kids Product</Accordion.Header>
                            <Accordion.Body>
                                Baby Product
                            </Accordion.Body>
                            <Accordion.Body>
                               Character Products
                            </Accordion.Body>
                            <Accordion.Body>
                               Kids Storage
                            </Accordion.Body>
                          
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="3.0">
                            <Accordion.Header> Laundary Storage & Luggage</Accordion.Header>
                            <Accordion.Body>
                                Airers
                            </Accordion.Body>
                            <Accordion.Body>
                                Backpacks
                            </Accordion.Body>
                            <Accordion.Body>
                                Ironing Boards & Covers
                            </Accordion.Body>
                            <Accordion.Body>
                                Laundary Accessories
                            </Accordion.Body>
                           
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="3.1">
                            <Accordion.Header> Plastic Housewares</Accordion.Header>
                            <Accordion.Body>
                              Food Containers
                            </Accordion.Body>
                            <Accordion.Body>
                              Kids Plastic Products
                            </Accordion.Body>
                            <Accordion.Body>
                                Melamine & Outdoor
                            </Accordion.Body>
                            <Accordion.Body>
                               Plastic Bathroom
                            </Accordion.Body>
                            <Accordion.Body>
                              Products
                            </Accordion.Body>
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="3.2">
                            <Accordion.Header> Pound Lines</Accordion.Header>
                            <Accordion.Body>
                               Bathroom Cosmetics/Beauty
                            </Accordion.Body>
                            <Accordion.Body>
                              Candles/Air
                            </Accordion.Body>
                            <Accordion.Body>
                              Freshners/Diffuse
                            </Accordion.Body>
                            <Accordion.Body>
                              Car Products
                            </Accordion.Body>
                            <Accordion.Body>
                               Craft
                            </Accordion.Body>
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                <Accordion.Body>
                <Accordion >
                        <Accordion.Item eventKey="3.3">
                            <Accordion.Header>Seasonal/Sports</Accordion.Header>
                            <Accordion.Body>
                               Cooler Bags & Cool
                            </Accordion.Body>
                            <Accordion.Body>
                              Boxes
                            </Accordion.Body>
                            <Accordion.Body>
                               Hot water Bottles
                            </Accordion.Body>
                            <Accordion.Body>
                                Picnic Outdoors
                            </Accordion.Body>
                           
                            <Accordion.Body>
                                View All 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
            <Accordion.Body>
            <Link to="/Departments">    View All</Link>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header><Link to="/Sundays">
                    Super Sunday Offer</Link>
                    </Accordion.Header>

            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>
                    <Link to="/Brands">
                    Shop By Brand
                    </Link></Accordion.Header>

            </Accordion.Item>
        </Accordion>
    );
}

export default Accord;