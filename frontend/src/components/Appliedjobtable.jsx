import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const Appliedjobtable = () => {
  return (
    <div>
      <Table>
        <TableCaption>
            your  applied jobs
        </TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>  date</TableHead>
                <TableHead>  job role</TableHead>
                <TableHead>  company</TableHead>
                <TableHead className="text-right">  status</TableHead>
                  
                
            </TableRow>
        </TableHeader>
        <TableBody>
           {
             [1,2].map((item,index)=>(
                <TableRow key={index}>
                    <TableCell>31/10/2024 </TableCell>
                    <TableCell>fromtend </TableCell>
                    <TableCell>google </TableCell>
                    <TableCell className="text-right"><Badge>selected</Badge></TableCell>
                </TableRow>
            ))
           }
        </TableBody>
      </Table>
    </div>
  )
}

export default Appliedjobtable
