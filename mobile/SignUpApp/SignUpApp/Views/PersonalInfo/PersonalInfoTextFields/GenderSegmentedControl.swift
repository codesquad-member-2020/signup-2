//
//  GenderSegmentedControl.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/27.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class GenderSegmentedControl: UISegmentedControl {

    var personalInfoViewModel: PersonalInfoViewModel?
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    private func configure() {
        addTarget(self, action: #selector(handleGenderChange), for: .valueChanged)
    }
    
    @objc private func handleGenderChange(segmentedControl: UISegmentedControl) {
        let index = segmentedControl.selectedSegmentIndex
        let gender: String = index == 0 ? "female" : "male"
        personalInfoViewModel?.gender = gender
    }
}
